import { HttpParamsOptions } from '@cnfs/json-api';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';
import { ICRUDService } from './icrud.service';
import {
  IJsonApiResourceCollectionPayload,
  IJSonApiResourceObjects,
  IJsonApiSingleResourcePayload,
} from './IJsonApiPayload';

export class MockGenericService<DTO, DTO_ATTRIBUTES>
  implements ICRUDService<DTO, DTO_ATTRIBUTES> {
  public constructor(
    private data: IJSonApiResourceObjects<DTO>[],
    private type: string
  ) {}

  public getList(
    params: HttpParamsOptions
  ): Observable<IJsonApiResourceCollectionPayload<DTO>> {
    let data: IJSonApiResourceObjects<DTO>[] = this.data;

    //filter
    Object.entries(params)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([key, _]: [string, string]) => key.startsWith('filter')) //only look at keys starting with filter
      .map(([key, v]: [string, string]) => [
        //extract key and transform value to lowercase
        key.substring(7, key.length - 1),
        v.toLowerCase(),
      ])
      .forEach(([key, v]: [string, string]) => {
        //for each filter, appply it on the
        data = data.filter((user: IJSonApiResourceObjects<DTO>) => {
          if (user.attributes === undefined) {
            return false;
          }
          if (user.attributes[key] === undefined) {
            return true;
          }
          return user.attributes[key].toLowerCase().includes(v);
        });
      });

    //sort
    if (params['sort']) {
      const sort: string = `${params['sort']}`;
      const key = sort.startsWith('-') ? sort.substr(1) : sort;
      const dir = sort.startsWith('-') ? -1 : 1;
      data = data.sort(
        (a: IJSonApiResourceObjects<DTO>, b: IJSonApiResourceObjects<DTO>) => {
          if (!a.attributes || !b.attributes) {
            return 0;
          }
          if (!a.attributes[key] || !b.attributes[key]) {
            console.log(`Missing key '${key}'`, a, b);
            return 0;
          }
          return (
            `${a.attributes[key]}`.localeCompare(`${b.attributes[key]}`) * dir
          );
        }
      );
    }

    //page
    const pageNumber: number = parseInt(`${params['page[number]']}` || '1');
    const pageSize: number = parseInt(`${params['page[size]']}` || '5');

    data = data.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
    return of({
      data,
      errors: [],
      included: [],
      meta: {
        record_count: this.data.length,
      },
    }).pipe(delay(200));
  }

  public getOne(id: string): Observable<IJsonApiSingleResourcePayload<DTO>> {
    const data: IJSonApiResourceObjects<DTO> | null =
      this.data
        .filter((it: IJSonApiResourceObjects<DTO>) => it.id === id)
        .pop() || null;
    return of({
      data,
      meta: {},
      included: [],
      errors: [],
    });
  }

  public delete(id: string): Observable<void> {
    const index: number = this.data.findIndex((item) => item.id === id);
    if (index !== undefined) {
      this.data = [...this.data.slice(0, index), ...this.data.slice(index + 1)];
    }

    return of();
  }

  public post(
    item: DTO_ATTRIBUTES
  ): Observable<IJsonApiSingleResourcePayload<DTO>> {
    const newItem: IJSonApiResourceObjects<DTO> = {
      id: uuidv4(),
      type: this.type,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      attributes: { ...item, created: new Date().toISOString() },
    };

    this.data = [...this.data, newItem];
    return of({
      data: newItem,
      errors: [],
      included: [],
      meta: {},
    });
  }

  public patch(
    id: string,
    attributes: Partial<DTO_ATTRIBUTES>
  ): Observable<IJsonApiSingleResourcePayload<DTO>> {
    const index = this.data.findIndex((item) => item.id === id);
    if (index === -1) {
      return throwError(`Invalid item id '${id}'`);
    }
    const item = this.data[index];
    const newItem: IJSonApiResourceObjects<DTO> = {
      ...item,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      attributes: {
        ...item.attributes,
        ...attributes,
        updated: new Date().toISOString(),
      },
    };
    this.data = [
      ...this.data.slice(0, index),
      newItem,
      ...this.data.slice(index + 1),
    ];

    return of({
      data: newItem,
      errors: [],
      included: [],
      meta: {},
    });
  }
}
