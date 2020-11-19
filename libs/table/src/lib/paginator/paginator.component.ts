import { Component, Input } from '@angular/core';
import { CustomDataSource } from '../custom-data-source';

@Component({
  selector: 'cnfs-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  @Input('dataSource')
  public dataSource: CustomDataSource<unknown>;
  @Input('pageSize')
  public pageSize = 10;
  @Input('pageSizeOptions')
  public pageSizeOptions: number[] = [5, 10, 25];
}
