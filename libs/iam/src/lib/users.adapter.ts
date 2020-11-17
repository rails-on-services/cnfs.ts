import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import {
  HttpParamsOptions,
  ITableData,
  ITableService,
} from '@cnfs/angular-table';
import { IJSonApiResourceObjects } from '@cnfs/json-api';

import { UserDto } from './user.dto';
import { IUser } from './user.model';
import { IUsersService } from './users.service';

@Injectable()
export class UsersAdapter implements ITableService<IUser> {
  constructor(private service: IUsersService) {}
  getTableData(params: HttpParamsOptions): Observable<ITableData<IUser>> {
    return this.service.getList(params).pipe(
      map((res) => {
        const users: IJSonApiResourceObjects<UserDto>[] = Array.isArray(
          res.data
        )
          ? res.data
          : [];
        const data: IUser[] = users.map(
          (item: IJSonApiResourceObjects<UserDto>) => this.fromDto(item)
        );

        return { data, meta: res.meta };
      })
    );
  }

  private fromDto(dto: IJSonApiResourceObjects<UserDto>): IUser {
    if (dto.attributes === undefined) {
      throw new Error('missing attributes on user resource');
    }
    return {
      firstName: dto.attributes.firstName,
      createdAt: new Date(dto.attributes.created),
    };
  }
}
