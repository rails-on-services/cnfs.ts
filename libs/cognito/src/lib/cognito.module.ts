import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule, Optional } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { TableModule } from '@cnfs/angular-table';
import { BASE_URL, CnfsCommonModule } from '@cnfs/common';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { PoolEditComponent } from './components/pool-edit/pool-edit.component';
import { PoolListComponent } from './components/pool-list/pool-list.component';
import { CustomersService as MockCustomersService } from './mocks/customers.service';
import { PoolsService as MockPoolsService } from './mocks/pools.service';
import { CustomersComponent } from './pages/customers/customers.component';
import { EditCustomerComponent } from './pages/edit-customer/edit-customer.component';
import { EditPoolComponent } from './pages/edit-pool/edit-pool.component';
import { HomeComponent } from './pages/home/home.component';
import { PoolsComponent } from './pages/pools/pools.component';
import { routes } from './routes';
import { CustomersAdapter } from './services/customers.adapter';
import { CustomersService } from './services/customers.service';
import { ICustomersService } from './services/icustomers.service';
import { IPoolsService } from './services/ipools.service';
import { PoolsAdapter } from './services/pools.adapter';
import { PoolsService } from './services/pools.service';

const mockWarning: string =
  'using mock service because of missing BASE_URL or http client';
const customersServiceFactory = (
  basePath?: string,
  http?: HttpClient
): ICustomersService => {
  if (basePath === undefined || !http) {
    console.log(mockWarning);
    return new MockCustomersService();
  }
  return new CustomersService(basePath, http);
};

const poolsServiceFactory = (
  basePath?: string,
  http?: HttpClient
): IPoolsService => {
  if (basePath === undefined || !http) {
    console.log(mockWarning);
    return new MockPoolsService();
  }
  return new PoolsService(basePath, http);
};

@NgModule({
  declarations: [
    HomeComponent,
    CustomersComponent,
    PoolsComponent,
    EditCustomerComponent,
    EditPoolComponent,
    CustomerListComponent,
    PoolListComponent,
    CustomerEditComponent,
    PoolEditComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CnfsCommonModule,
    MatTabsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    TableModule,
    ReactiveFormsModule,
  ],
  providers: [
    CustomersAdapter,
    PoolsAdapter,
    {
      provide: ICustomersService,
      useFactory: customersServiceFactory,
      deps: [
        [new Optional(), BASE_URL],
        [new Optional(), HttpClient],
      ],
    },
    {
      provide: IPoolsService,
      useFactory: poolsServiceFactory,
      deps: [
        [new Optional(), BASE_URL],
        [new Optional(), HttpClient],
      ],
    },
  ],
})
export class CognitoModule {}
