import { Component, Input } from '@angular/core';
import { PoolsAdapter } from '../../services/pools.adapter';
import { IPool } from '../../models/pool';
import { CustomDataSource } from '@cnfs/angular-table';
@Component({
  selector: 'cnfs-pool-list',
  templateUrl: './pool-list.component.html',
  styleUrls: ['./pool-list.component.scss'],
})
export class PoolListComponent {
  public dataSource: CustomDataSource<IPool>;

  @Input()
  public displayedColumns: string[] = ['name'];

  public constructor(customersAdapter: PoolsAdapter) {
    this.dataSource = new CustomDataSource(customersAdapter);
  }
}
