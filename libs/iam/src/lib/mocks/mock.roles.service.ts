import { MockGenericService } from '@cnfs/json-api';
import { RoleAttributesDto, RoleDto } from '../models/role.dto';
import { IRolesService } from '../services/roles.service';
import { mockRoles } from './sample-roles';

export class MockRolesService
  extends MockGenericService<RoleDto, RoleAttributesDto>
  implements IRolesService {
  public constructor() {
    super(mockRoles, 'role');
  }
}
