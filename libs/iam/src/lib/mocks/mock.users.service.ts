import { HttpParamsOptions } from '@cnfs/angular-table';
import {
  IJsonApiResourceCollectionPayload,
  IJSonApiResourceObjects,
  IJsonApiSingleResourcePayload,
} from '@cnfs/json-api';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { UserDto } from '../models/user.dto';
import { IUsersService } from '../services/users.service';
import { sample } from './sample-users';

export class MockUsersService implements IUsersService {
  public getList(
    params: HttpParamsOptions
  ): Observable<IJsonApiResourceCollectionPayload<UserDto>> {
    let users: IJSonApiResourceObjects<UserDto>[] = Array.isArray(sample.data)
      ? sample.data
      : [];
    if (params['filter[firstName]'] !== undefined) {
      users = users.filter((user: IJSonApiResourceObjects<UserDto>) => {
        if (user.attributes === undefined) {
          return false;
        }
        return user.attributes.firstName
          .toLowerCase()
          .includes(`${params['filter[firstName]']}`.toLowerCase());
      });
    }
    if (params['sort'] === 'firstName') {
      users = users.sort(
        (
          a: IJSonApiResourceObjects<UserDto>,
          b: IJSonApiResourceObjects<UserDto>
        ) => {
          if (!a.attributes || !b.attributes) {
            return 0;
          }
          return a.attributes.firstName.localeCompare(b.attributes.firstName);
        }
      );
    }
    if (params['sort'] === '-firstName') {
      users = users.sort(
        (
          a: IJSonApiResourceObjects<UserDto>,
          b: IJSonApiResourceObjects<UserDto>
        ) => {
          if (!a.attributes || !b.attributes) {
            return 0;
          }
          return -a.attributes.firstName.localeCompare(b.attributes.firstName);
        }
      );
    }
    if (params['sort'] === 'createdAt') {
      users = users.sort(
        (
          a: IJSonApiResourceObjects<UserDto>,
          b: IJSonApiResourceObjects<UserDto>
        ) => {
          if (!a.attributes || !b.attributes) {
            return 0;
          }
          return a.attributes.created.localeCompare(b.attributes.created);
        }
      );
    }
    if (params['sort'] === '-createdAt') {
      users = users.sort(
        (
          a: IJSonApiResourceObjects<UserDto>,
          b: IJSonApiResourceObjects<UserDto>
        ) => {
          if (!a.attributes || !b.attributes) {
            return 0;
          }
          return -a.attributes.created.localeCompare(b.attributes.created);
        }
      );
    }
    const pageNumber: number = parseInt(`${params['page[number]']}` || '1');
    const pageSize: number = parseInt(`${params['page[size]']}` || '5');

    users = users.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
    return of({
      ...sample,
      data: users,
    }).pipe(delay(200));
  }

  public getOne(
    id: string
  ): Observable<IJsonApiSingleResourcePayload<UserDto>> {
    const user: IJSonApiResourceObjects<UserDto> | null =
      sample.data
        .filter((user: IJSonApiResourceObjects<UserDto>) => user.id === id)
        .pop() || null;
    return of({
      ...sample,
      data: user,
    });
  }
}
