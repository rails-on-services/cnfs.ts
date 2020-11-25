import { Observable } from 'rxjs';

import { HttpParamsOptions } from '@cnfs/angular-table';
import {
  IJsonApiResourceCollectionPayload,
  IJsonApiSingleResourcePayload,
  ICRUDService,
} from '@cnfs/json-api';

import { UserDto, UserAttributesDto } from '../models/user.dto';

export abstract class IUsersService
  implements ICRUDService<UserDto, UserAttributesDto> {
  abstract getList(
    params: HttpParamsOptions
  ): Observable<IJsonApiResourceCollectionPayload<UserDto>>;

  abstract getOne(
    id: string
  ): Observable<IJsonApiSingleResourcePayload<UserDto>>;

  abstract delete(id: string): Observable<void>;

  abstract post(
    item: UserAttributesDto
  ): Observable<IJsonApiSingleResourcePayload<UserDto>>;

  abstract patch(
    id: string,
    item: Partial<UserAttributesDto>
  ): Observable<IJsonApiSingleResourcePayload<UserDto>>;
}
