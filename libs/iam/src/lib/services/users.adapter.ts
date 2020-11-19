import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import {
  HttpParamsOptions,
  ITableData,
  ITableService,
} from '@cnfs/angular-table';
import {
  IJSonApiResourceObjects,
  IJsonApiSingleResourcePayload,
} from '@cnfs/json-api';

import { UserDto } from '../models/user.dto';
import { IUser, IUserAttributes } from '../models/user.model';
import { IUsersService } from './users.service';

@Injectable()
export class UsersAdapter implements ITableService<IUser> {
  public constructor(private service: IUsersService) {}

  public getTableData(
    params: HttpParamsOptions
  ): Observable<ITableData<IUser>> {
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

  public getOne(id: string): Observable<IUser | null> {
    return this.service
      .getOne(id)
      .pipe(
        map((res: IJsonApiSingleResourcePayload<UserDto>) =>
          res.data === null ? null : this.fromDto(res.data)
        )
      );
  }

  public create(user: IUserAttributes): Observable<IUser> {
    return throwError('not implemented yet');
  }

  public update(id: string, user: Partial<IUserAttributes>): Observable<IUser> {
    return throwError('not implemented');
  }

  public delete(id: string): Observable<void> {
    return throwError('not implemented');
  }

  private fromDto(dto: IJSonApiResourceObjects<UserDto>): IUser {
    if (dto.attributes === undefined) {
      throw new Error('missing attributes on user resource');
    }
    return {
      id: dto.id,
      firstName: dto.attributes.firstName,
      createdAt: new Date(dto.attributes.created),
    };
  }
}
