import { Component, Input } from '@angular/core';
import { CustomDataSource } from '@cnfs/angular-table';
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
  public displayedColumns: string[] = ['name'];

  public constructor(customersAdapter: CustomersAdapter) {
    this.dataSource = new CustomDataSource(customersAdapter);
  }
}
