import { Injectable } from '@angular/core';
import { GenericAdapter, ITableService } from '@cnfs/angular-table';
import { IJSonApiResourceObjects } from '@cnfs/json-api';
import { IPool, IPoolAttributes } from '../models/pool';
import { PoolAttributesDto, PoolDto } from '../models/pool.dto';
import { IPoolsService } from '../services/ipools.service';

function fromDto(dto: IJSonApiResourceObjects<PoolDto>): IPool {
  if (dto.attributes === undefined) {
    throw new Error('missing attributes on user resource');
  }
  return {
    id: dto.id,
    name: dto.attributes.name,
  };
}

function toDtoAttributes(item: IPoolAttributes): PoolAttributesDto {
  return { name: item.name };
}

function toDtoPartialAttributes(
  item: Partial<IPoolAttributes>
): Partial<PoolAttributesDto> {
  return { name: item.name };
}

@Injectable()
export class PoolsAdapter
  extends GenericAdapter<
    IPool,
    IPoolAttributes,
    PoolDto,
    PoolAttributesDto
  >
  implements ITableService<IPool> {
  public constructor(service: IPoolsService) {
    super(service, toDtoAttributes, toDtoPartialAttributes, fromDto);
  }
}
