import { Component, Input } from '@angular/core';
import { CustomersAdapter } from '../../services/customers.adapter';
import { ICustomer } from '../../models/customer';
import { CustomDataSource } from '@cnfs/angular-table';

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
