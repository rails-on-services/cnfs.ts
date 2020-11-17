import { Observable } from 'rxjs';

import { HttpParamsOptions } from '@cnfs/angular-table';
import { IJsonApiResourceCollectionPayload } from '@cnfs/json-api';

import { UserDto } from '../models/user.dto';

export abstract class IUsersService {
  abstract getList(
    params: HttpParamsOptions
  ): Observable<IJsonApiResourceCollectionPayload<UserDto>>;
}
