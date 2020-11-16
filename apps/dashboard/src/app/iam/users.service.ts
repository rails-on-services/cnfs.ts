import { Observable, of } from 'rxjs';
import { ITableData } from '../table-data/data-list.interface';
import { HttpParamsOptions } from '../table-data/params-map';
import { ITableService } from '../table-data/table-service-interface';
import { IUser } from './user.model';
import { sample } from './sample';
import { UserDto } from './user.dto';
import { IJSonApiResourceObjects } from '@cnfs/json-api';

export class UsersService implements ITableService<IUser> {
  getTableData(params: HttpParamsOptions): Observable<ITableData<IUser>> {
    console.log(params);
    let users: IJSonApiResourceObjects<UserDto>[] = Array.isArray(sample.data)
      ? sample.data
      : [];
    if (params['filter[firstName]'] !== undefined) {
      users = users.filter((user: IJSonApiResourceObjects<UserDto>) =>
        user.attributes.firstName
          .toLowerCase()
          .includes(`${params['filter[firstName]']}`)
      );
    }
    if (params['sort'] === 'firstName') {
      users = users.sort(
        (
          a: IJSonApiResourceObjects<UserDto>,
          b: IJSonApiResourceObjects<UserDto>
        ) => a.attributes.firstName.localeCompare(b.attributes.firstName)
      );
    }
    if (params['sort'] === '-firstName') {
      users = users.sort(
        (
          a: IJSonApiResourceObjects<UserDto>,
          b: IJSonApiResourceObjects<UserDto>
        ) => -a.attributes.firstName.localeCompare(b.attributes.firstName)
      );
    }
    if (params['sort'] === 'createdAt') {
      users = users.sort(
        (
          a: IJSonApiResourceObjects<UserDto>,
          b: IJSonApiResourceObjects<UserDto>
        ) => a.attributes.created.localeCompare(b.attributes.created)
      );
    }
    if (params['sort'] === '-createdAt') {
      users = users.sort(
        (
          a: IJSonApiResourceObjects<UserDto>,
          b: IJSonApiResourceObjects<UserDto>
        ) => -a.attributes.created.localeCompare(b.attributes.created)
      );
    }
    const res: IUser[] = users.map(
      (item: IJSonApiResourceObjects<UserDto>) => ({
        firstName: item.attributes.firstName,
        createdAt: new Date(item.attributes.created),
      })
    );
    return of({ data: res, meta: sample.meta });
  }
}
