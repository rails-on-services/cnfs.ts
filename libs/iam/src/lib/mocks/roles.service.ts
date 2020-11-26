import { MockGenericService } from '@cnfs/json-api';
import { RoleAttributesDto, RoleDto } from '../models/role.dto';
import { IRolesService } from '../services/iroles.service';
import { roles } from './roles';

export class RolesService extends MockGenericService<RoleDto, RoleAttributesDto>
  implements IRolesService {
  public constructor() {
    super(roles, 'role');
  }
}
