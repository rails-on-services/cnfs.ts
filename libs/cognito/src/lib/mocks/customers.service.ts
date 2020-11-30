import { MockGenericService } from '@cnfs/json-api';
import {
  CustomerAttributesDto,
  CustomerDto,
  TYPE,
} from '../models/customer.dto';
import { ICustomersService } from '../services/icustomers.service';
import { customers } from './customers';

export class CustomersService
  extends MockGenericService<CustomerDto, CustomerAttributesDto>
  implements ICustomersService {
  public constructor() {
    super(customers, TYPE);
  }
}
