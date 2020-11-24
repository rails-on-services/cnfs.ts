import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CnfsCommonModule } from '@cnfs/common';
import { HomeComponent } from './pages/home/home.component';
import { routes } from './routes';
import { CustomersComponent } from './pages/customers/customers.component';
import { PoolsComponent } from './pages/pools/pools.component';
import { EditCustomerComponent } from './pages/edit-customer/edit-customer.component';
import { EditPoolComponent } from './pages/edit-pool/edit-pool.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { PoolListComponent } from './components/pool-list/pool-list.component';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';
import { PoolEditComponent } from './components/pool-edit/pool-edit.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), CnfsCommonModule],
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
})
export class CognitoModule {}
