import { IJsonApiError } from './IJsonApiError';
import { IJsonApiLinks } from './IJsonApiLink';
import { IJsonApiMeta } from './IJsonApiMeta';

export interface IJsonApiTopLevelPayload<T> {
  data: T;
  errors: IJsonApiError[];
  meta: IJsonApiMeta;
  jsonapi?: any;
  links?: IJsonApiLinks;
  included: any[];
}

export type IJsonApiSingleResourcePayload<
  T
> = IJsonApiTopLevelPayload<IJSonApiResourceObjects<T> | null>;

export type IJsonApiResourceCollectionPayload<T> = IJsonApiTopLevelPayload<
  IJSonApiResourceObjects<T>[] | []
>;

export interface IJSonApiResourceObjects<T> {
  id: string;
  type: string;
  attributes?: T;
  relationships?: any;
  links?: IJsonApiLinks;
  meta?: IJsonApiMeta;
}
