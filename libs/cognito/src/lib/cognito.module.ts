import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { TableModule } from '@cnfs/angular-table';
import { CnfsCommonModule } from '@cnfs/common';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { PoolEditComponent } from './components/pool-edit/pool-edit.component';
import { PoolListComponent } from './components/pool-list/pool-list.component';
import { CustomersService } from './mocks/customers.service';
import { CustomersComponent } from './pages/customers/customers.component';
import { EditCustomerComponent } from './pages/edit-customer/edit-customer.component';
import { EditPoolComponent } from './pages/edit-pool/edit-pool.component';
import { HomeComponent } from './pages/home/home.component';
import { PoolsComponent } from './pages/pools/pools.component';
import { routes } from './routes';
import { CustomersAdapter } from './services/customers.adapter';
import { ICustomersService } from './services/icustomers.service';
import { PoolsAdapter } from './services/pools.adapter';

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
    TableModule,
    ReactiveFormsModule,
  ],
  providers: [
    CustomersAdapter,
    PoolsAdapter,
    { provide: ICustomersService, useClass: CustomersService },
  ],
})
export class CognitoModule {}
