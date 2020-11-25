import { ITableService } from '@cnfs/angular-table';
import { IJSonApiResourceObjects } from '@cnfs/json-api';
import { GroupAttributesDto, GroupDto } from '../models/group.dto';
import { IGroup, IGroupAttributes } from '../models/group.model';
import { GenericAdapter } from './generic.adapter';
import { IGroupsService } from './groups.service';
import { Injectable } from '@angular/core';

function toDtoAttributes(item: IGroupAttributes): GroupAttributesDto {
  return { ...item };
}

function toDtoPartialAttributes(
  item: Partial<IGroupAttributes>
): Partial<GroupAttributesDto> {
  return { ...item };
}

function fromDto(item: IJSonApiResourceObjects<GroupDto>): IGroup {
  return { id: item.id, name: item.attributes?.name || '' };
}

@Injectable()
export class GroupsAdapter
  extends GenericAdapter<IGroup, IGroupAttributes, GroupDto, GroupAttributesDto>
  implements ITableService<IGroup> {
  public constructor(service: IGroupsService) {
    super(service, toDtoAttributes, toDtoPartialAttributes, fromDto);
  }
}
