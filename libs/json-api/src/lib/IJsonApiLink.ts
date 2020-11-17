import { IJsonApiMeta } from './IJsonApiMeta';

export type IJsonApiLink =
  | string
  | {
      href: string;
      meta: IJsonApiMeta;
    };
export type IJsonApiLinks = { [k: string]: IJsonApiLink };
