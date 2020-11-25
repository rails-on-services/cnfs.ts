import { HttpParamsOptions } from '@cnfs/angular-table';
import {
  IJsonApiResourceCollectionPayload,
  IJsonApiSingleResourcePayload,
} from '@cnfs/json-api';
import { Observable } from 'rxjs';

export interface ICRUDService<DTO, DTO_ATTRIBUTES> {
  getList(
    params: HttpParamsOptions
  ): Observable<IJsonApiResourceCollectionPayload<DTO>>;

  getOne(id: string): Observable<IJsonApiSingleResourcePayload<DTO>>;

  delete(id: string): Observable<void>;

  post(item: DTO_ATTRIBUTES): Observable<IJsonApiSingleResourcePayload<DTO>>;

  patch(
    id: string,
    item: Partial<DTO_ATTRIBUTES>
  ): Observable<IJsonApiSingleResourcePayload<DTO>>;
}
