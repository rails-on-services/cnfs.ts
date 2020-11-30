import { MockGenericService } from '@cnfs/json-api';
import { PoolAttributesDto, PoolDto, TYPE } from '../models/pool.dto';
import { IPoolsService } from '../services/ipools.service';
import { pools } from './pools';

export class PoolsService extends MockGenericService<PoolDto, PoolAttributesDto>
  implements IPoolsService {
  public constructor() {
    super(pools, TYPE);
  }
}
