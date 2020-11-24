import { EMPTY } from 'rxjs';
import { PoolsAdapter } from '../services/pools.adapter';

export const poolsAdapterMock: Partial<PoolsAdapter> = {
  getTableData: () => EMPTY,
};
