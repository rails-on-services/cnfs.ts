import { IJsonApiResourceCollectionPayload } from '@cnfs/json-api';

import { UserDto } from '../models/user.dto';

export const sample: IJsonApiResourceCollectionPayload<UserDto> = {
  data: [
    {
      type: 'user',
      id: '1',
      attributes: {
        firstName: 'Nicolas',
        created: '2015-05-22T14:56:29.000Z',
        updated: '2015-05-22T14:56:28.000Z',
      },
    },
    {
      type: 'user',
      id: '2',
      attributes: {
        firstName: 'Yohan',
        created: '2015-04-21T14:56:29.000Z',
        updated: '2015-04-21T14:56:28.000Z',
      },
    },
  ],
  errors: [],
  included: [],
  meta: {
    record_count: 1,
  },
};
