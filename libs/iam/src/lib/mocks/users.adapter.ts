import { of } from 'rxjs';
import { UsersAdapter } from '../services/users.adapter';

export const usersAdapterMock: Partial<UsersAdapter> = {
  getTableData: () =>
    of({
      data: [],
      meta: {},
    }),
};
