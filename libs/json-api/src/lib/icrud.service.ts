import {
  HttpParamsOptions,
  IJsonApiResourceCollectionPayload,
  IJsonApiSingleResourcePayload,
} from '@cnfs/json-api';
import { Observable } from 'rxjs';

export abstract class ICRUDService<DTO, DTO_ATTRIBUTES> {
  public abstract getList(
    params: HttpParamsOptions
  ): Observable<IJsonApiResourceCollectionPayload<DTO>>;

  public abstract getOne(
    id: string
  ): Observable<IJsonApiSingleResourcePayload<DTO>>;

  public abstract delete(id: string): Observable<void>;

  public abstract post(
    item: DTO_ATTRIBUTES
  ): Observable<IJsonApiSingleResourcePayload<DTO>>;

  public abstract patch(
    id: string,
    item: Partial<DTO_ATTRIBUTES>
  ): Observable<IJsonApiSingleResourcePayload<DTO>>;
}
