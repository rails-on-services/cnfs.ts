import { Component } from '@angular/core';
import { ICustomer } from '../../models/customer';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cnfs-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent {
  public constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  public onAction(event: { action: string; customer: ICustomer }): void {
    if (event.action === 'edit') {
      this.router.navigate(['..', 'customer-edit', event.customer.id], {
        relativeTo: this.activatedRoute,
      });
    }
  }
}
