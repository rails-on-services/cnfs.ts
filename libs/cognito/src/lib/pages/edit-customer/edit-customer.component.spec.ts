import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ICustomer } from '../../models/customer';
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
