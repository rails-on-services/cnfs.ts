import { CustomersAdapter } from '../services/customers.adapter';
import { EMPTY } from 'rxjs';

export const customersAdapterMock: Partial<CustomersAdapter> = {
  getTableData: () => EMPTY,
};
