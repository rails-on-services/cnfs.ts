import { Observable } from 'rxjs';

import { ITableData } from './data-list.interface';
import { HttpParamsOptions } from './params-map';

export interface ITableService<T = unknown> {
  getTableData(params: HttpParamsOptions): Observable<ITableData<T>>;
}
