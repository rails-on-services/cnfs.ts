import { IJsonApiError } from './IJsonApiError';
import { IJsonApiLinks } from './IJsonApiLink';
import { IJsonApiMeta } from './IJsonApiMeta';
import { IJSonApiRelationships } from './IJSonApiRelationships';

export interface IJsonApiTopLevelPayload<T, I = void, M = IJsonApiMeta> {
  data: T;
  errors: IJsonApiError[];
  meta: M;
  jsonapi?: unknown;
  links?: IJsonApiLinks;
  included: I[];
}

export type IJsonApiSingleResourcePayload<
  T,
  I = void,
  M = IJsonApiMeta
> = IJsonApiTopLevelPayload<IJSonApiResourceObjects<T> | null, I, M>;

export type IJsonApiResourceCollectionPayload<
  T,
  I = void,
  M = IJsonApiMeta
> = IJsonApiTopLevelPayload<IJSonApiResourceObjects<T>[] | [], I, M>;

export interface IJSonApiResourceObjects<T> {
  id: string;
  type: string;
  attributes?: T;
  relationships?: IJSonApiRelationships;
  links?: IJsonApiLinks;
  meta?: IJsonApiMeta;
}
