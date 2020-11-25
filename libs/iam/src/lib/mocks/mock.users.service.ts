import { UserDto, UserAttributesDto } from '../models/user.dto';
import { IUsersService } from '../services/users.service';
import { MockGenericService } from '@cnfs/json-api';
import { mockUsers } from './sample-users';

export class MockUsersService
  extends MockGenericService<UserDto, UserAttributesDto>
  implements IUsersService {
  public constructor() {
    super(mockUsers, 'user');
  }
}
