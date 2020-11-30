# Cnfs

## Tool

This project was generated using [Nx](https://nx.dev).

## Build for production

```bash
yarn build --prod
```

Output assets are in `dist/apps/dashboard`

## Serve for development

```bash
yarn start
```

By default app is served on http://localhost:4200.

## CI

Each pull request to master runs the following checks using github actions:

- Unit tests: `yarn affected:test --base=origin/master`
- Lint: `yarn affected:lint --base=origin/master`
- Build: `yarn affected:build --base=origin/master`

## Deploy

Currently it is deployed to https://rails-on-services.github.io/cnfs.ts/ using

```bash
yarn nx deploy
```

## Contribute

### Adding a new json-api data-object support.

- Define dto making the split between the attributes that are computed (createdAt and updatedAt) vs the attribuets that are updated directly through the api. (e.g `libs/iam/src/lib/models/group.dto.ts`)

- Declare and add to module a generic implementation

```ts
export abstract class IGroupsService extends ICRUDService<
  GroupDto,
  GroupAttributesDto
> {}

export class GroupsService extends GenericService<GroupDto, GroupAttributesDto>
  implements IGroupsService {
  public constructor(@Inject(BASE_URL) basePath: string, http: HttpClient) {
    super(basePath, TYPE, http);
  }
}

//in module:
{provide:IGroupsService, useClass: GroupsService}
```

- Optionnaly there is also a generic mock implementation of the service:

```ts
export class GroupsService
  extends MockGenericService<GroupDto, GroupAttributesDto>
  implements IGroupsService {
  public constructor() {
    super(groups, TYPE);
  }
}
```

### Using a crud endpoint data in a list view

- Define an `ITableService` using the `GenericAdapter` implementation (eg. `libs/iam/src/lib/services/groups.adapter.ts`) and declare it in modules.

- In your component define a CustomDataSource

```ts
  public dataSource: CustomDataSource<IGroup>;

  constructor(usersAdapter: GroupsAdapter) {
    this.dataSource = new CustomDataSource(groupsAdapter);
  }
```

- Use the paginator and loader objects

```html
<cnfs-loader [dataSource]="dataSource"></cnfs-loader>
<cnfs-paginator [dataSource]="dataSource"></cnfs-paginator>
```

- Optionnaly, link the datasource with the sort object

```html
<table mat-table [dataSource]="dataSource" matSort>
  <!-- ... -->
</table>
```

```ts
  @ViewChild(MatSort) public sort: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
```

- Optionally, link the dataSource with a filter form. The form control keys should be matching the data column keys.

```ts
    public filter: FormGroup;

    this.dataSource.filter$ = this.filter.valueChanges;
```
