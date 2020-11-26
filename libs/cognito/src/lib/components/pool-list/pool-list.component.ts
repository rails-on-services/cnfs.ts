import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CustomDataSource } from '@cnfs/angular-table';
import { IPool } from '../../models/pool';
import { PoolsAdapter } from '../../services/pools.adapter';
import { IAction } from '@cnfs/common';

@Component({
  selector: 'cnfs-pool-list',
  templateUrl: './pool-list.component.html',
  styleUrls: ['./pool-list.component.scss'],
})
export class PoolListComponent {
  public dataSource: CustomDataSource<IPool>;

  @Input()
  public displayedColumns: string[] = ['name', 'actions'];

  @Input()
  public actions: IAction[] = [
    { action: 'edit', icon: 'edit', label: 'Edit Pool' },
  ];

  @Output()
  private action: EventEmitter<{
    action: string;
    pool: IPool;
  }> = new EventEmitter();

  public constructor(customersAdapter: PoolsAdapter) {
    this.dataSource = new CustomDataSource(customersAdapter);
  }

  public onAction(action: string, pool: IPool): void {
    this.action.next({ action, pool });
  }
}
