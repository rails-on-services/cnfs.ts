import { HttpParamsOptions } from '@cnfs/angular-table';
import {
  IJsonApiResourceCollectionPayload,
  IJSonApiResourceObjects,
  IJsonApiSingleResourcePayload,
} from '@cnfs/json-api';
import { Observable, of } from 'rxjs';
import { UserDto } from '../models/user.dto';
import { sample } from './sample';
import { IUsersService } from './users.service';

export class MockUsersService implements IUsersService {
  getList(
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
          .includes(`${params['filter[firstName]']}`);
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
    return of({
      ...sample,
      data: users,
    });
  }

  getOne(id: string): Observable<IJsonApiSingleResourcePayload<UserDto>> {
    const user: IJSonApiResourceObjects<UserDto> = sample.data
      .filter((user: IJSonApiResourceObjects<UserDto>) => user.id === id)
      .pop();
    return of({
      ...sample,
      data: user,
    });
  }
}
