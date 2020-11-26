import { ICRUDService } from '@cnfs/json-api';
import { RoleAttributesDto, RoleDto } from '../models/role.dto';

export abstract class IRolesService extends ICRUDService<
  RoleDto,
  RoleAttributesDto
> {}
