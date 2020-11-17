import { HttpParamsOptions } from '@cnfs/angular-table';
import {
  IJsonApiResourceCollectionPayload,
  IJsonApiSingleResourcePayload,
} from '@cnfs/json-api';
import { Observable } from 'rxjs';
import { UserDto } from '../models/user.dto';

export abstract class IUsersService {
  abstract getList(
    params: HttpParamsOptions
  ): Observable<IJsonApiResourceCollectionPayload<UserDto>>;

  abstract getOne(
    id: string
  ): Observable<IJsonApiSingleResourcePayload<UserDto>>;
}
