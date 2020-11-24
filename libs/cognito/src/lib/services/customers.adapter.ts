import {
  HttpParamsOptions,
  ITableData,
  ITableService,
} from '@cnfs/angular-table';
import { Observable, throwError } from 'rxjs';
import { ICustomer } from '../models/customer';

export class CustomersAdapter implements ITableService<ICustomer> {
  public getTableData(
    params: HttpParamsOptions
  ): Observable<ITableData<ICustomer>> {
    return throwError('Not implemented yet');
  }
}
