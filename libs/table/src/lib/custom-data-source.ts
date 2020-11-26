import { DataSource } from '@angular/cdk/collections';
import { PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { HttpParamsOptions } from '@cnfs/json-api';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { ITableData } from './data-list.interface';
import { ITableService } from './itable.service';

// enum of states for manage view in pages where used data source
export enum DataSourceStates {
  firstLoading = 0, // between init dataSource to get first response from data service (use for showing page preloader)
  hasDataApi = 1, // get response from data service with data (use for showing table/grid card)
  noDataApi = 2, // get first response from data service without data (use for showing no data)
  errorApi = 3, // get first response from data service with error (use for showing error)
}

export enum DataSourceUpdateSchema {
  firstPage = 0,
  currentPage = 1,
}

export class CustomDataSource<T> extends DataSource<T> {
  private dataSubject: BehaviorSubject<T[]> = new BehaviorSubject([]);
  private loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private lengthSubject: BehaviorSubject<number> = new BehaviorSubject(0);
  private errorSubject: BehaviorSubject<string | null> = new BehaviorSubject(
    null
  );

  private destroy$: Subject<void> = new Subject();
  private request: Subscription;
  private privateSort: Sort;
  private privateFilter: { [key: string]: string };

  // default items on the page set up pageSize
  public constructor(
    public dataService: ITableService<T>,
    private pageSize: number = 10,
    private pageIndex: number = 1,
    private initParams: HttpParamsOptions = {}
  ) {
    super();
    this.updateData(DataSourceUpdateSchema.firstPage);
  }

  // used for set all length items the pagination component
  public get length$(): Observable<number> {
    return this.lengthSubject;
  }

  // used for toggle spinner loading
  public get loading$(): Observable<boolean> {
    return this.loadingSubject;
  }

  public get error$(): Observable<string | null> {
    return this.errorSubject;
  }

  public set filter$(filter: Observable<{ [key: string]: string }>) {
    filter.subscribe((item) => (this.filter = item));
  }

  public connect(): Observable<T[]> {
    return this.dataSubject.asObservable();
  }

  public disconnect(): void {
    this.request.unsubscribe();
    this.destroy$.next();
    this.destroy$.complete();
    this.dataSubject.complete();
    this.loadingSubject.complete();
    this.lengthSubject.complete();
  }

  public set sort(sort: MatSort) {
    if (!sort) {
      throw new Error('sort is undefined');
    }
    sort.sortChange
      .pipe(debounceTime(300), takeUntil(this.destroy$))
      .subscribe((newSort) => {
        this.privateSort = newSort;
        this.updateData(DataSourceUpdateSchema.firstPage);
      });
  }

  public set pages$(pages: Observable<PageEvent>) {
    pages.subscribe((evt: PageEvent) => {
      this.pageIndex = evt.pageIndex;
      this.pageSize = evt.pageSize;
      this.refresh();
    });
  }

  public refresh(): void {
    const pageNum = this.pageIndex + 1;
    const params: HttpParamsOptions = {
      ...this.initParams,
      ...this.prepareFilters(),
      ...this.sortPrepare(this.privateSort),
      'page[number]': pageNum,
      'page[size]': this.pageSize,
    };
    if (this.request) {
      this.request.unsubscribe();
    }
    this.loadingSubject.next(true);
    if (!isNaN(pageNum)) {
      this.request = this.dataService.getTableData(params).subscribe(
        (res: ITableData<T>) => {
          this.dataSubject.next(res.data);
          this.lengthSubject.next(res.meta?.record_count || 0);
          this.loadingSubject.next(false);
          this.errorSubject.next(null);
        },
        () => {
          this.dataSubject.next([]);
          this.lengthSubject.next(0);
          this.loadingSubject.next(false);
          this.errorSubject.next('Could not load data');
          // this.setState(DataSourceStates.errorApi);
        }
      );
    }
  }

  private set filter(value: { [key: string]: string } | string) {
    if (typeof value === 'string') {
      this.privateFilter = JSON.parse(value);
    } else {
      this.privateFilter = value;
    }
    this.updateData(DataSourceUpdateSchema.firstPage);
  }

  private updateData(
    schema: DataSourceUpdateSchema = DataSourceUpdateSchema.firstPage
  ): void {
    switch (schema) {
      case DataSourceUpdateSchema.firstPage:
        this.pageIndex = 0;
        break;
      case DataSourceUpdateSchema.currentPage:
        break;
    }
    this.refresh();
  }

  private sortPrepare(sortData: Sort): { [key: string]: string } {
    if (sortData && sortData.direction !== '') {
      const sort =
        sortData.direction === 'asc'
          ? `${sortData.active}`
          : `-${sortData.active}`;
      return { sort };
    }
    return {};
  }

  private prepareFilters(): { [k: string]: string } {
    if (!this.privateFilter) {
      return {};
    }
    const result = {};
    Object.keys(this.privateFilter).forEach((item) => {
      if (this.privateFilter[item]) {
        result[`filter[${item}]`] = this.privateFilter[item];
      }
    });
    return result;
  }
}
