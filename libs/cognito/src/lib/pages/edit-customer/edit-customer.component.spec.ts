import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { customersAdapterMock } from '../../mocks/customers.adapter';
import { ICustomer } from '../../models/customer';
import { CustomersAdapter } from '../../services/customers.adapter';
import { EditCustomerComponent } from './edit-customer.component';

@Component({ selector: 'cnfs-customer-edit', template: '' })
class CustomerEditMockComponent {
  @Input() private customer: ICustomer;
}
describe('EditCustomerComponent', () => {
  let component: EditCustomerComponent;
  let fixture: ComponentFixture<EditCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditCustomerComponent, CustomerEditMockComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: CustomersAdapter, useValue: customersAdapterMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
