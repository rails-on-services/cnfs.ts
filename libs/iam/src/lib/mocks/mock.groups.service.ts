import { MockGenericService } from '@cnfs/json-api';
import { GroupAttributesDto, GroupDto } from '../models/group.dto';
import { IGroupsService } from '../services/groups.service';
import { mockGroups } from './sample-groups';

export class MockGroupsService
  extends MockGenericService<GroupDto, GroupAttributesDto>
  implements IGroupsService {
  public constructor() {
    super(mockGroups, 'group');
  }
}
