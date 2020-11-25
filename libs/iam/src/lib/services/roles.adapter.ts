import { Injectable } from '@angular/core';
import { GenericAdapter, ITableService } from '@cnfs/angular-table';
import { IJSonApiResourceObjects } from '@cnfs/json-api';
import { RoleAttributesDto, RoleDto } from '../models/role.dto';
import { IRole, IRoleAttributes } from '../models/role.model';
import { IRolesService } from './iroles.service';

function fromDto(dto: IJSonApiResourceObjects<RoleDto>): IRole {
  if (dto.attributes === undefined) {
    throw new Error('missing attributes on user resource');
  }
  return {
    id: dto.id,
    name: dto.attributes.name,
  };
}

function toDtoAttributes(item: IRoleAttributes): RoleAttributesDto {
  return { name: item.name };
}

function toDtoPartialAttributes(
  item: Partial<IRoleAttributes>
): Partial<RoleAttributesDto> {
  return { name: item.name };
}

@Injectable()
export class RolesAdapter
  extends GenericAdapter<IRole, IRoleAttributes, RoleDto, RoleAttributesDto>
  implements ITableService<IRole> {
  public constructor(service: IRolesService) {
    super(service, toDtoAttributes, toDtoPartialAttributes, fromDto);
  }
}
