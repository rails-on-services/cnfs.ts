import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { BASE_URL } from '@cnfs/common';
import { GenericService } from '@cnfs/json-api';
import { TYPE, UserAttributesDto, UserDto } from '../models/user.dto';
import { IUsersService } from './iusers.service';

export class UsersService extends GenericService<UserDto, UserAttributesDto>
  implements IUsersService {
  public constructor(@Inject(BASE_URL) basePath: string, http: HttpClient) {
    super(basePath, TYPE, http);
  }
}
