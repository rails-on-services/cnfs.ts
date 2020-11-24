import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomDataSource } from '@cnfs/angular-table';
import { IAction } from '@cnfs/common';
import { ICustomer } from '../../models/customer';
import { CustomersAdapter } from '../../services/customers.adapter';

@Component({
  selector: 'cnfs-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent {
  public dataSource: CustomDataSource<ICustomer>;

  @Input()
  public displayedColumns: string[] = ['name', 'actions'];

  @Input()
  public actions: IAction[] = [
    { icon: 'edit', label: 'Edit Customer', action: 'edit' },
  ];

  @Output()
  public action: EventEmitter<{
    customer: ICustomer;
    action: string;
  }> = new EventEmitter();

  public constructor(customersAdapter: CustomersAdapter) {
    this.dataSource = new CustomDataSource(customersAdapter);
  }

  public onAction(action: string, customer: ICustomer): void {
    this.action.next({ action, customer });
  }
}
