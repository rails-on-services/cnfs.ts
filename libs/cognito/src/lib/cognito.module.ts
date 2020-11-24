import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { CnfsCommonModule } from '@cnfs/common';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { PoolEditComponent } from './components/pool-edit/pool-edit.component';
import { PoolListComponent } from './components/pool-list/pool-list.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { EditCustomerComponent } from './pages/edit-customer/edit-customer.component';
import { EditPoolComponent } from './pages/edit-pool/edit-pool.component';
import { HomeComponent } from './pages/home/home.component';
import { PoolsComponent } from './pages/pools/pools.component';
import { routes } from './routes';

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
  ],
})
export class CognitoModule {}
