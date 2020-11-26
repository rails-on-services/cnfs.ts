import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICustomer, ICustomerAttributes } from '../../models/customer';
import { CustomersAdapter } from '../../services/customers.adapter';
import { NotificationService } from '@cnfs/common';

@Component({
  selector: 'cnfs-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss'],
})
export class CustomerEditComponent implements OnChanges {
  @Output()
  private done: EventEmitter<boolean> = new EventEmitter();

  @Input()
  private customer: ICustomer | undefined;

  public form: FormGroup = this.fb.group({
    name: [null, [Validators.required, Validators.minLength(1)]],
  });

  public constructor(
    private fb: FormBuilder,
    private customersAdapter: CustomersAdapter,
    private notificationService: NotificationService
  ) {}

  public onCancel(): void {
    this.done.next(false);
  }

  public onSave(): void {
    if (this.form.valid) {
      const cust: ICustomerAttributes = { name: this.form.value.name };
      const req = this.customer
        ? this.customersAdapter.update(this.customer.id, cust)
        : this.customersAdapter.create(cust);
      req.subscribe(
        () => {
          this.notificationService.addSnack('✅ Customer successfully saved!');
          this.done.next(true);
        },
        () => this.notificationService.addSnack('❌ Failed Customer saving!')
      );
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.customer && this.customer) {
      this.form.setValue({ name: this.customer.name });
    }
  }
}
