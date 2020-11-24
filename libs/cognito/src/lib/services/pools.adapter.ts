import {
  HttpParamsOptions,
  ITableData,
  ITableService,
} from '@cnfs/angular-table';
import { Observable, throwError } from 'rxjs';
import { IPool } from '../models/pool';

export class PoolsAdapter implements ITableService<IPool> {
  public getTableData(
    params: HttpParamsOptions
  ): Observable<ITableData<IPool>> {
    return throwError('Not implemented yet');
  }
}
