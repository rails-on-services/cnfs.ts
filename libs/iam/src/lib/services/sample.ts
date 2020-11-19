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
    {
      type: 'user',
      id: '3',
      attributes: {
        firstName: 'Yannick',
        created: '2015-05-22T14:56:29.000Z',
        updated: '2015-05-22T14:56:28.000Z',
      },
    },
    {
      type: 'user',
      id: '4',
      attributes: {
        firstName: 'David',
        created: '2015-04-21T14:56:29.000Z',
        updated: '2015-04-21T14:56:28.000Z',
      },
    },
    {
      type: 'user',
      id: '5',
      attributes: {
        firstName: 'Clement',
        created: '2015-05-22T14:56:29.000Z',
        updated: '2015-05-22T14:56:28.000Z',
      },
    },
    {
      type: 'user',
      id: '6',
      attributes: {
        firstName: 'Marie',
        created: '2015-04-21T14:56:29.000Z',
        updated: '2015-04-21T14:56:28.000Z',
      },
    },
    {
      type: 'user',
      id: '7',
      attributes: {
        firstName: 'Jean Pierre',
        created: '2015-05-22T14:56:29.000Z',
        updated: '2015-05-22T14:56:28.000Z',
      },
    },
    {
      type: 'user',
      id: '8',
      attributes: {
        firstName: 'Helene',
        created: '2015-04-21T14:56:29.000Z',
        updated: '2015-04-21T14:56:28.000Z',
      },
    },
    {
      type: 'user',
      id: '9',
      attributes: {
        firstName: 'Remi',
        created: '2015-05-22T14:56:29.000Z',
        updated: '2015-05-22T14:56:28.000Z',
      },
    },
    {
      type: 'user',
      id: '10',
      attributes: {
        firstName: 'Marine',
        created: '2015-04-21T14:56:29.000Z',
        updated: '2015-04-21T14:56:28.000Z',
      },
    },
    {
      type: 'user',
      id: '11',
      attributes: {
        firstName: 'Elise',
        created: '2015-05-22T14:56:29.000Z',
        updated: '2015-05-22T14:56:28.000Z',
      },
    },
    {
      type: 'user',
      id: '12',
      attributes: {
        firstName: 'Aurelie',
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
