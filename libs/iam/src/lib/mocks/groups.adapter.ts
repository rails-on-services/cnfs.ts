import { GroupsAdapter } from "../services/groups.adapter";
import { of } from "rxjs";

export const groupsAdapterMock: Partial<GroupsAdapter> = {
  getTableData: () =>
    of({
      data: [],
      meta: {},
    }),
};
