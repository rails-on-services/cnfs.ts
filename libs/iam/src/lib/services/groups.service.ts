import { ICRUDService } from '@cnfs/json-api';
import { GroupAttributesDto, GroupDto } from '../models/group.dto';

export abstract class IGroupsService extends ICRUDService<
  GroupDto,
  GroupAttributesDto
> {}
