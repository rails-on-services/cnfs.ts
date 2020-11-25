import { ICRUDService } from '@cnfs/json-api';
import { UserAttributesDto, UserDto } from '../models/user.dto';

export abstract class IUsersService extends ICRUDService<
  UserDto,
  UserAttributesDto
> {}
