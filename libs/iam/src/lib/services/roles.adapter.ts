import {
  HttpParamsOptions,
  ITableData,
  ITableService,
} from '@cnfs/angular-table';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IRole } from '../models/role.model';

export class RolesAdapter implements ITableService<IRole> {
  public getTableData(
    params: HttpParamsOptions
  ): Observable<ITableData<IRole>> {
    //mock-data
    return of({
      data: [
        { id: '1', name: 'Microsite' },
        { id: '2', name: 'POS' },
      ],
      meta: {},
    }).pipe(delay(100));
  }
}
