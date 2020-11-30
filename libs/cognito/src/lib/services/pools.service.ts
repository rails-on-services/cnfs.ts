import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { BASE_URL } from '@cnfs/common';
import { GenericService } from '@cnfs/json-api';
import { PoolAttributesDto, PoolDto, TYPE } from '../models/pool.dto';
import { IPoolsService } from './ipools.service';

export class PoolsService extends GenericService<PoolDto, PoolAttributesDto>
  implements IPoolsService {
  public constructor(@Inject(BASE_URL) basePath: string, http: HttpClient) {
    super(basePath, TYPE, http);
  }
}
