import {
  HttpParamsOptions,
  ITableData,
  ITableService,
} from '@cnfs/angular-table';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IGroup } from '../models/group.model';

export class GroupsAdapter implements ITableService<IGroup> {
  public getTableData(
    params: HttpParamsOptions
  ): Observable<ITableData<IGroup>> {
    //mock-data
    return of({
      data: [
        { id: '1', name: 'Admin' },
        { id: '2', name: 'Finance' },
      ],
      meta: {
        record_count: 2,
      },
    }).pipe(delay(100));
  }
}
