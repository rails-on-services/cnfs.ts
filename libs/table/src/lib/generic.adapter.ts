import { Injectable } from '@angular/core';
import {
  HttpParamsOptions,
  ICRUDService,
  IJSonApiResourceObjects,
  IJsonApiSingleResourcePayload,
} from '@cnfs/json-api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITableData } from './data-list.interface';
import { ITableService } from './itable.service';

@Injectable()
export class GenericAdapter<ITEM, ITEM_ATTRIBUTES, DTO, DTO_ATTRIBUTES>
  implements ITableService<ITEM> {
  public constructor(
    private service: ICRUDService<DTO, DTO_ATTRIBUTES>,
    private toDtoAttributes: (item: ITEM_ATTRIBUTES) => DTO_ATTRIBUTES,
    private toDtoPartialAttributes: (
      item: Partial<ITEM_ATTRIBUTES>
    ) => Partial<DTO_ATTRIBUTES>,
    private fromDto: (dto: IJSonApiResourceObjects<DTO>) => ITEM
  ) {}

  public getTableData(params: HttpParamsOptions): Observable<ITableData<ITEM>> {
    return this.service.getList(params).pipe(
      map((res) => {
        const users: IJSonApiResourceObjects<DTO>[] = Array.isArray(res.data)
          ? res.data
          : [];
        const data: ITEM[] = users.map((item: IJSonApiResourceObjects<DTO>) =>
          this.fromDto(item)
        );

        return { data, meta: res.meta };
      })
    );
  }

  public getOne(id: string): Observable<ITEM | null> {
    return this.service
      .getOne(id)
      .pipe(
        map((res: IJsonApiSingleResourcePayload<DTO>) =>
          res.data === null ? null : this.fromDto(res.data)
        )
      );
  }

  public create(user: ITEM_ATTRIBUTES): Observable<ITEM> {
    return this.service.post(this.toDtoAttributes(user)).pipe(
      map((item) => {
        if (item.data === null) {
          throw new Error('created item is null');
        }
        return this.fromDto(item.data);
      })
    );
  }

  public update(id: string, user: Partial<ITEM_ATTRIBUTES>): Observable<ITEM> {
    return this.service.patch(id, this.toDtoPartialAttributes(user)).pipe(
      map((item) => {
        if (item.data === null) {
          throw new Error('created item is null');
        }
        return this.fromDto(item.data);
      })
    );
  }

  public delete(id: string): Observable<void> {
    return this.service.delete(id);
  }
}
