import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, map, takeUntil } from 'rxjs/operators';

import { DataSource } from '@angular/cdk/collections';
import { MatSort, Sort } from '@angular/material/sort';

import { ITableData } from './data-list.interface';
import { IPagination } from './ipagination';
import { HttpParamsOptions } from './params-map';
import { ITableService } from './table-service-interface';

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
  private dataSubject: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);
  private loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<
    boolean
  >(false);
  // used for toggle spinner loading
  public loading$: Observable<boolean> = this.loadingSubject.asObservable();
  private changeFilterSearch: BehaviorSubject<number> = new BehaviorSubject<
    number
  >(0);
  // used for setUp pagination index page to 0 when searching
  public changeSearch$: Observable<
    number
  > = this.changeFilterSearch.asObservable();
  public state$: BehaviorSubject<DataSourceStates> = new BehaviorSubject<
    DataSourceStates
  >(DataSourceStates.firstLoading);
  private lengthData: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  // used for set all length items the pagination component
  public length$: Observable<number> = this.lengthData.asObservable();
  private pageIndex: number;

  // use for set included params
  private privateParams: HttpParamsOptions;
  private destroy$: Subject<void> = new Subject();
  private request: Subscription;
  private privateSort: Sort;
  private privateFilter: { [key: string]: string };

  // default items on the page set up pageSize
  constructor(
    public dataService: ITableService<T>,
    public pageSize: number = 5,
    params?: HttpParamsOptions
  ) {
    super();
    if (params) {
      this.params = params;
    }
    this.updateData(DataSourceUpdateSchema.firstPage);
  }

  public get length(): number {
    return this.lengthData.value;
  }

  public set params(value: HttpParamsOptions) {
    this.privateParams = value;
    this.loadingData();
  }

  public get params(): HttpParamsOptions {
    return this.privateParams || {};
  }

  public get data(): T[] {
    return this.dataSubject.value;
  }

  public get data$(): Observable<T[]> {
    return this.dataSubject.asObservable();
  }

  public get state(): DataSourceStates {
    return this.state$.value;
  }

  public get hasData$(): Observable<boolean> {
    return this.dataSubject.pipe(map((data) => data.length > 0));
  }

  public get sort(): Sort {
    return this.privateSort;
  }

  public set sort(val: Sort) {
    this.privateSort = val;
    this.changeFilterSearch.next(0);
    this.updateData(DataSourceUpdateSchema.firstPage);
  }

  private set filter(value: { [key: string]: string } | string) {
    if (typeof value === 'string') {
      this.privateFilter = JSON.parse(value);
    } else {
      this.privateFilter = value;
    }
    this.changeFilterSearch.next(0);
    this.updateData(DataSourceUpdateSchema.firstPage);
  }

  public set $filter(filter: Observable<{ [key: string]: string }>) {
    filter.subscribe((item) => (this.filter = item));
  }

  public set pagination(value: IPagination) {
    if (this.pageSize !== value.pageSize) {
      this.pageSize = value.pageSize;
      this.changeFilterSearch.next(0);
    }
    if (this.pageIndex !== value.pageIndex) {
      this.pageIndex = value.pageIndex;
    }
    this.updateData(DataSourceUpdateSchema.currentPage);
  }

  public connect(): Observable<T[]> {
    return this.dataSubject.asObservable();
  }

  public disconnect(): void {
    this.request.unsubscribe();
    this.destroy$.next();
    this.destroy$.complete();
    this.dataSubject.complete();
    this.changeFilterSearch.complete();
    this.loadingSubject.complete();
    this.lengthData.complete();
  }

  public updateData(
    schema: DataSourceUpdateSchema = DataSourceUpdateSchema.firstPage
  ): void {
    switch (schema) {
      case DataSourceUpdateSchema.firstPage:
        this.pageIndex = 0;
        break;
      case DataSourceUpdateSchema.currentPage:
        break;
    }
    this.loadingData();
  }

  public registerSort(sort: MatSort): void {
    if (!sort) {
      throw new Error('sort is undefined');
    }
    sort.sortChange
      .pipe(debounceTime(300), takeUntil(this.destroy$))
      .subscribe((newSort) => (this.sort = newSort));
  }

  private loadingData(): void {
    const pageNum = this.pageIndex + 1;
    const params: HttpParamsOptions = {
      ...this.params,
      ...this.prepareFilters(),
      ...this.sortPrepare(this.sort),
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
          this.lengthData.next(res.meta?.record_count || 0);
          this.loadingSubject.next(false);
          const status =
            res.data.length > 0 && (res.meta?.record_count || 0) > 0
              ? DataSourceStates.hasDataApi
              : DataSourceStates.noDataApi;
          this.setState(status);
        },
        () => {
          this.dataSubject.next([]);
          this.lengthData.next(0);
          this.loadingSubject.next(false);
          this.setState(DataSourceStates.errorApi);
        }
      );
    }
  }

  private setState(state: DataSourceStates): void {
    if (
      this.state$.value === DataSourceStates.firstLoading ||
      this.state$.value === DataSourceStates.noDataApi
    ) {
      this.state$.next(state);
    }
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
