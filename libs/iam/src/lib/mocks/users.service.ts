import { MockGenericService } from '@cnfs/json-api';
import { TYPE, UserAttributesDto, UserDto } from '../models/user.dto';
import { IUsersService } from '../services/iusers.service';
import { users } from './users';

export class UsersService extends MockGenericService<UserDto, UserAttributesDto>
  implements IUsersService {
  public constructor() {
    super(users, TYPE);
  }
}
