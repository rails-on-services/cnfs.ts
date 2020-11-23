import { RolesAdapter } from '../services/roles.adapter';
import { of } from 'rxjs';

export const rolesAdapterMock: Partial<RolesAdapter> = {
  getTableData: () =>
    of({
      data: [],
      meta: {},
    }),
};
