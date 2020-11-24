import {
  HttpParamsOptions,
  ITableData,
  ITableService,
} from '@cnfs/angular-table';
import { Observable, of } from 'rxjs';
import { ICustomer } from '../models/customer';

export class CustomersAdapter implements ITableService<ICustomer> {
  public getTableData(
    params: HttpParamsOptions
  ): Observable<ITableData<ICustomer>> {
    return of({
      data: [{ id: '1', name: 'Johnny' }],
      meta: { record_count: 1 },
    });
  }
}
