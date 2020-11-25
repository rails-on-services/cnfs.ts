import { ICRUDService } from '@cnfs/json-api';
import { PoolAttributesDto, PoolDto } from '../models/pool.dto';

export abstract class IPoolsService extends ICRUDService<
  PoolDto,
  PoolAttributesDto
> {}
