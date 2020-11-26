import { HttpClient } from '@angular/common/http';
import { HttpParamsOptions } from '@cnfs/json-api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICRUDService } from './icrud.service';
import {
  IJsonApiResourceCollectionPayload,
  IJsonApiSingleResourcePayload,
} from './IJsonApiPayload';

export class GenericService<DTO, DTO_ATTRIBUTES>
  implements ICRUDService<DTO, DTO_ATTRIBUTES> {
  public constructor(
    private basePath: string,
    private type: string,
    private http: HttpClient
  ) {}

  public getList(
    params: HttpParamsOptions
  ): Observable<IJsonApiResourceCollectionPayload<DTO>> {
    const query = Object.entries(params)
      .map(([k, v]: [string, string]) => `${k}=${v}`)
      .join('&');
    return this.http.get<IJsonApiResourceCollectionPayload<DTO>>(
      `${this.basePath}?${query}`
    );
  }

  public getOne(id: string): Observable<IJsonApiSingleResourcePayload<DTO>> {
    return this.http.get<IJsonApiSingleResourcePayload<DTO>>(
      `${this.basePath}/${id}`
    );
  }

  public delete(id: string): Observable<void> {
    return this.http.delete(`${this.basePath}/${id}`).pipe(map(() => void 0));
  }

  public post(
    attributes: DTO_ATTRIBUTES
  ): Observable<IJsonApiSingleResourcePayload<DTO>> {
    return this.http.post<IJsonApiSingleResourcePayload<DTO>>(
      `${this.basePath}`,
      { data: { type: this.type, attributes } }
    );
  }

  public patch(
    id: string,
    attributes: Partial<DTO_ATTRIBUTES>
  ): Observable<IJsonApiSingleResourcePayload<DTO>> {
    return this.http.patch<IJsonApiSingleResourcePayload<DTO>>(
      `${this.basePath}/${id}`,
      { data: { type: this.type, id, attributes } }
    );
  }
}
