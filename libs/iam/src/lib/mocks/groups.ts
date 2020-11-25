import { IJSonApiResourceObjects } from '@cnfs/json-api';
import { GroupDto } from '../models/group.dto';

export const groups: IJSonApiResourceObjects<GroupDto>[] = [
  {
    type: 'group',
    id: '1',
    attributes: {
      name: 'Admin',
      created: '2015-05-22T14:56:29.000Z',
      updated: '2015-05-22T14:56:28.000Z',
    },
  },
  {
    type: 'group',
    id: '2',
    attributes: {
      name: 'Finance',
      created: '2015-04-21T14:56:29.000Z',
      updated: '2015-04-21T14:56:28.000Z',
    },
  },
  {
    type: 'group',
    id: '3',
    attributes: {
      name: 'Customer success',
      created: '2015-04-21T14:56:29.000Z',
      updated: '2015-04-21T14:56:28.000Z',
    },
  },
  {
    type: 'group',
    id: '3',
    attributes: {
      name: 'Customer support',
      created: '2015-04-21T14:56:29.000Z',
      updated: '2015-04-21T14:56:28.000Z',
    },
  },
];
