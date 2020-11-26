import { HttpParamsOptions } from '@cnfs/json-api';
import { Observable } from 'rxjs';
import { ITableData } from './data-list.interface';

export interface ITableService<T = unknown> {
  getTableData(params: HttpParamsOptions): Observable<ITableData<T>>;
}
