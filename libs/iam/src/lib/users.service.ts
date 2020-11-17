import { Observable } from 'rxjs';

import { HttpParamsOptions } from '@cnfs/angular-table';
import { IJsonApiResourceCollectionPayload } from '@cnfs/json-api';

import { UserDto } from './user.dto';

export abstract class IUsersService {
  abstract getList(
    params: HttpParamsOptions
  ): Observable<IJsonApiResourceCollectionPayload<UserDto>>;
}
