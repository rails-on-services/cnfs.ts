import { IJSonApiResourceObjects } from '@cnfs/json-api';
import { RoleDto } from '../models/role.dto';

export const mockRoles: IJSonApiResourceObjects<RoleDto>[] = [
  {
    type: 'role',
    id: '1',
    attributes: {
      name: 'POS',
      created: '2015-05-22T14:56:29.000Z',
      updated: '2015-05-22T14:56:28.000Z',
    },
  },
  {
    type: 'role',
    id: '2',
    attributes: {
      name: 'iOS app',
      created: '2015-04-21T14:56:29.000Z',
      updated: '2015-04-21T14:56:28.000Z',
    },
  },
  {
    type: 'role',
    id: '3',
    attributes: {
      name: 'android app',
      created: '2015-05-22T14:56:29.000Z',
      updated: '2015-05-22T14:56:28.000Z',
    },
  },
];
