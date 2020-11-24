import { Routes, Route } from '@angular/router';
import { CustomersComponent } from './pages/customers/customers.component';
import { EditCustomerComponent } from './pages/edit-customer/edit-customer.component';
import { EditPoolComponent } from './pages/edit-pool/edit-pool.component';
import { HomeComponent } from './pages/home/home.component';
import { PoolsComponent } from './pages/pools/pools.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: HomeComponent,
    children: [
      { path: 'customers', component: CustomersComponent, pathMatch: 'prefix' },
      {
        path: 'customer-edit/:customerId',
        component: EditCustomerComponent,
        pathMatch: 'prefix',
      },
      { path: 'pool-edit', component: EditPoolComponent, pathMatch: 'prefix' },
      { path: 'pools', component: PoolsComponent, pathMatch: 'prefix' },
    ],
  },
];

export const links: { label: string; route: string; icon?: string }[] = routes
  .filter((route: Route) => route.data?.label !== undefined)
  .map((route: Route) => ({
    label: route.data?.label || '',
    route: route.path || '',
    icon: route.data?.icon,
  }));
