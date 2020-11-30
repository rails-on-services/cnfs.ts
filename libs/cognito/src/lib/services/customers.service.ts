import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { BASE_URL } from '@cnfs/common';
import { GenericService } from '@cnfs/json-api';
import {
  CustomerAttributesDto,
  CustomerDto,
  TYPE,
} from '../models/customer.dto';
import { ICustomersService } from './icustomers.service';

export class CustomersService
  extends GenericService<CustomerDto, CustomerAttributesDto>
  implements ICustomersService {
  public constructor(@Inject(BASE_URL) basePath: string, http: HttpClient) {
    super(basePath, TYPE, http);
  }
}
