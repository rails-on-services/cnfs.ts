import { ITableData, ITableService } from '@cnfs/angular-table';
import { HttpParamsOptions } from '@cnfs/json-api';
import { Observable, of } from 'rxjs';
import { IPool } from '../models/pool';

export class PoolsAdapter implements ITableService<IPool> {
  public getTableData(
    params: HttpParamsOptions
  ): Observable<ITableData<IPool>> {
    return of({
      data: [
        { id: '1', name: 'Gold' },
        { id: '2', name: 'Silver' },
      ],
      meta: { record_count: 2 },
    });
  }
}
