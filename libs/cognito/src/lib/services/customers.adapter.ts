import { Injectable } from '@angular/core';
import { GenericAdapter, ITableService } from '@cnfs/angular-table';
import { IJSonApiResourceObjects } from '@cnfs/json-api';
import { ICustomer, ICustomerAttributes } from '../models/customer';
import { CustomerAttributesDto, CustomerDto } from '../models/customer.dto';
import { ICustomersService } from '../services/icustomers.service';

function fromDto(dto: IJSonApiResourceObjects<CustomerDto>): ICustomer {
  if (dto.attributes === undefined) {
    throw new Error('missing attributes on user resource');
  }
  return {
    id: dto.id,
    name: dto.attributes.name,
  };
}

function toDtoAttributes(item: ICustomerAttributes): CustomerAttributesDto {
  return { name: item.name };
}

function toDtoPartialAttributes(
  item: Partial<ICustomerAttributes>
): Partial<CustomerAttributesDto> {
  return { name: item.name };
}

@Injectable()
export class CustomersAdapter
  extends GenericAdapter<
    ICustomer,
    ICustomerAttributes,
    CustomerDto,
    CustomerAttributesDto
  >
  implements ITableService<ICustomer> {
  public constructor(service: ICustomersService) {
    super(service, toDtoAttributes, toDtoPartialAttributes, fromDto);
  }
}
