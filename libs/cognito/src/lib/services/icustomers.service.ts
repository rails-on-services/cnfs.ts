import { ICRUDService } from '@cnfs/json-api';
import { CustomerAttributesDto, CustomerDto } from '../models/customer.dto';

export abstract class ICustomersService extends ICRUDService<
  CustomerDto,
  CustomerAttributesDto
> {}
