import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { CustomDataSource } from '../custom-data-source';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'cnfs-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements AfterViewInit {
  @Input('dataSource')
  public dataSource?: CustomDataSource<unknown>;
  @Input('pageSize')
  public pageSize = 10;
  @Input('pageSizeOptions')
  public pageSizeOptions: number[] = [5, 10, 25];
  @ViewChild('paginator')
  public paginator: MatPaginator;

  public ngAfterViewInit(): void {
    if (this.dataSource && this.paginator) {
      this.dataSource.pages$ = this.paginator.page;
    }
  }
}
