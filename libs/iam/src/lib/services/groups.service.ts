import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { BASE_URL } from '@cnfs/common';
import { GenericService } from '@cnfs/json-api';
import { GroupAttributesDto, GroupDto, TYPE } from '../models/group.dto';
import { IGroupsService } from '../services/igroups.service';

export class GroupsService extends GenericService<GroupDto, GroupAttributesDto>
  implements IGroupsService {
  public constructor(@Inject(BASE_URL) basePath: string, http: HttpClient) {
    super(basePath, TYPE, http);
  }
}
