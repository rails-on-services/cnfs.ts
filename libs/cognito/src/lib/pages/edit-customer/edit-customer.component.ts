import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ICustomer } from '../../models/customer';
import { CustomersAdapter } from '../../services/customers.adapter';
import { filter, map, switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'cnfs-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss'],
})
export class EditCustomerComponent {
  public customer: ICustomer | undefined;

  public constructor(
    activatedRoute: ActivatedRoute,
    customersAdapter: CustomersAdapter,
    private location: Location,
    private router: Router
  ) {
    activatedRoute.paramMap
      .pipe(
        filter((ps: ParamMap) => ps.has('customerId')),
        map((ps: ParamMap) => ps.get('customerId')),
        switchMap((id: string) => customersAdapter.getOne(id))
      )
      .subscribe((customer: ICustomer) => (this.customer = customer));
  }

  public onDone(): void {
    try {
      this.location.back();
    } catch {
      this.router.navigate(['..', '..', 'customers']);
    }
  }
}
