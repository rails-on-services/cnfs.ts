import { Observable } from 'rxjs';
import { HttpParamsOptions } from './params-map';
import { ITableData } from './data-list.interface';

export interface ITableService<T = unknown> {
  getTableData(params: HttpParamsOptions): Observable<ITableData<T>>;
}
