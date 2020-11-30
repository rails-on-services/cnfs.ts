import { MockGenericService } from '@cnfs/json-api';
import { GroupAttributesDto, GroupDto, TYPE } from '../models/group.dto';
import { IGroupsService } from '../services/igroups.service';
import { groups } from './groups';

export class GroupsService
  extends MockGenericService<GroupDto, GroupAttributesDto>
  implements IGroupsService {
  public constructor() {
    super(groups, TYPE);
  }
}
