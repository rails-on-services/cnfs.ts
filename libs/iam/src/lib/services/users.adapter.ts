import { Injectable } from '@angular/core';
import { ITableService } from '@cnfs/angular-table';
import { IJSonApiResourceObjects } from '@cnfs/json-api';
import { UserAttributesDto, UserDto } from '../models/user.dto';
import { IUser, IUserAttributes } from '../models/user.model';
import { GenericAdapter } from './generic.adapter';
import { IUsersService } from './users.service';

function fromDto(dto: IJSonApiResourceObjects<UserDto>): IUser {
  if (dto.attributes === undefined) {
    throw new Error('missing attributes on user resource');
  }
  return {
    id: dto.id,
    firstName: dto.attributes.firstName,
    createdAt: new Date(dto.attributes.created),
  };
}

function toDtoAttributes(item: IUserAttributes): UserAttributesDto {
  return { firstName: item.firstName };
}

function toDtoPartialAttributes(
  item: Partial<IUserAttributes>
): Partial<UserAttributesDto> {
  return { firstName: item.firstName };
}

@Injectable()
export class UsersAdapter
  extends GenericAdapter<IUser, IUserAttributes, UserDto, UserAttributesDto>
  implements ITableService<IUser> {
  public constructor(service: IUsersService) {
    super(service, toDtoAttributes, toDtoPartialAttributes, fromDto);
  }
}
