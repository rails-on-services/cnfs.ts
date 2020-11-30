import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { BASE_URL } from '@cnfs/common';
import { GenericService } from '@cnfs/json-api';
import { RoleAttributesDto, RoleDto, TYPE } from '../models/role.dto';
import { IRolesService } from './iroles.service';

export class RolesService extends GenericService<RoleDto, RoleAttributesDto>
  implements IRolesService {
  public constructor(@Inject(BASE_URL) basePath: string, http: HttpClient) {
    super(basePath, TYPE, http);
  }
}
