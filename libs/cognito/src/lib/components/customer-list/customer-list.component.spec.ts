import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { TableModule } from '@cnfs/angular-table';
import { CnfsCommonModule } from '@cnfs/common';
import { customersAdapterMock } from '../../mocks/customers.adapter';
import { CustomersAdapter } from '../../services/customers.adapter';
import { CustomerListComponent } from './customer-list.component';

describe('CustomerListComponent', () => {
  let component: CustomerListComponent;
  let fixture: ComponentFixture<CustomerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerListComponent],
      imports: [MatTableModule, TableModule, CnfsCommonModule, MatSortModule],
      providers: [
        { provide: CustomersAdapter, useValue: customersAdapterMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
