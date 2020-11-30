import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule, Optional } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { TableModule } from '@cnfs/angular-table';
import { BASE_URL, CnfsCommonModule } from '@cnfs/common';
import { EditGroupComponent } from './components/edit-group/edit-group.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { GroupListComponent } from './components/group-list/group-list.component';
import { RoleListComponent } from './components/role-list/role-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { GroupsService as MockGroupsService } from './mocks/groups.service';
import { RolesService as MockRolesService } from './mocks/roles.service';
import { UsersService as MockUsersService } from './mocks/users.service';
import { EditGroupPageComponent } from './pages/edit-group-page/edit-group-page.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { IamComponent } from './pages/iam/iam.component';
import { RolesComponent } from './pages/roles/roles.component';
import { UserComponent } from './pages/user/user.component';
import { UsersComponent } from './pages/users/users.component';
import { routes } from './routes';
import { GroupsAdapter } from './services/groups.adapter';
import { GroupsService } from './services/groups.service';
import { IGroupsService } from './services/igroups.service';
import { IRolesService } from './services/iroles.service';
import { IUsersService } from './services/iusers.service';
import { RolesAdapter } from './services/roles.adapter';
import { RolesService } from './services/roles.service';
import { UsersAdapter } from './services/users.adapter';
import { UsersService } from './services/users.service';

const mockWarning: string =
  'using mock service because of missing BASE_URL or http client';
const usersServiceFactory = (
  basePath?: string,
  http?: HttpClient
): IUsersService => {
  if (basePath === undefined || !http) {
    console.log(mockWarning);
    return new MockUsersService();
  }
  return new UsersService(basePath, http);
};
const groupsServiceFactory = (
  basePath?: string,
  http?: HttpClient
): IGroupsService => {
  if (basePath === undefined || !http) {
    console.log(mockWarning);
    return new MockGroupsService();
  }
  return new GroupsService(basePath, http);
};
const rolesServiceFactory = (
  basePath?: string,
  http?: HttpClient
): IRolesService => {
  if (basePath === undefined || !http) {
    console.log(mockWarning);
    return new MockRolesService();
  }
  return new RolesService(basePath, http);
};

@NgModule({
  declarations: [
    IamComponent,
    UsersComponent,
    UserListComponent,
    UsersComponent,
    EditUserComponent,
    GroupsComponent,
    RolesComponent,
    GroupListComponent,
    RoleListComponent,
    EditGroupComponent,
    EditGroupPageComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    ReactiveFormsModule,
    CnfsCommonModule,
    TableModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    {
      provide: IUsersService,
      useFactory: usersServiceFactory,
      deps: [
        [new Optional(), BASE_URL],
        [new Optional(), HttpClient],
      ],
    },
    {
      provide: IGroupsService,
      useFactory: groupsServiceFactory,
      deps: [
        [new Optional(), BASE_URL],
        [new Optional(), HttpClient],
      ],
    },
    {
      provide: IRolesService,
      useFactory: rolesServiceFactory,
      deps: [
        [new Optional(), BASE_URL],
        [new Optional(), HttpClient],
      ],
    },
    UsersAdapter,
    GroupsAdapter,
    RolesAdapter,
  ],
  exports: [GroupListComponent, UserListComponent, RoleListComponent],
})
export class IamModule {}
