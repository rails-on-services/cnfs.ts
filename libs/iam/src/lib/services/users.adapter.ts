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

import { UserDto, UserAttributesDto } from '../models/user.dto';
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
    return this.service.post(this.toDtoAttributes(user)).pipe(
      map((item) => {
        if (item.data === null) {
          throw new Error('created item is null');
        }
        return this.fromDto(item.data);
      })
    );
  }

  public update(id: string, user: Partial<IUserAttributes>): Observable<IUser> {
    return this.service.patch(id, this.toDtoPartialAttributes(user)).pipe(
      map((item) => {
        if (item.data === null) {
          throw new Error('created item is null');
        }
        return this.fromDto(item.data);
      })
    );
  }

  public delete(id: string): Observable<void> {
    return this.service.delete(id);
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

  private toDtoAttributes(item: IUserAttributes): UserAttributesDto {
    return { firstName: item.firstName };
  }

  private toDtoPartialAttributes(
    item: Partial<IUserAttributes>
  ): Partial<UserAttributesDto> {
    return { firstName: item.firstName };
  }
}
