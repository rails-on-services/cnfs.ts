import { IJsonApiLinks } from './IJsonApiLink';
import { IJsonApiMeta } from './IJsonApiMeta';

export interface IJSonApiRelationships {
  links?: IJsonApiLinks;
  data?: unknown;
  meta: IJsonApiMeta;
}
