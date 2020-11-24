import { Routes } from '@angular/router';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { EditGroupPageComponent } from './pages/edit-group-page/edit-group-page.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { IamComponent } from './pages/iam/iam.component';
import { RolesComponent } from './pages/roles/roles.component';
import { UserComponent } from './pages/user/user.component';
import { UsersComponent } from './pages/users/users.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: IamComponent,
    children: [
      { path: 'users', component: UsersComponent, pathMatch: 'prefix' },
      {
        path: 'edit-user/:userId',
        component: EditUserComponent,
        pathMatch: 'prefix',
      },
      {
        path: 'create-user',
        component: EditUserComponent,
        pathMatch: 'prefix',
      },
      {
        path: 'user/:userId',
        component: UserComponent,
        pathMatch: 'prefix',
      },
      {
        path: 'groups',
        component: GroupsComponent,
      },
      { path: 'roles', component: RolesComponent },
      {
        path: 'edit-group/:groupId',
        component: EditGroupPageComponent,
        pathMatch: 'prefix',
      },
      {
        path: 'create-group',
        component: EditGroupPageComponent,
        pathMatch: 'prefix',
      },
      { path: '', pathMatch: 'full', redirectTo: 'users' },
    ],
  },
  // { path: '*', redirectTo: '' },
];
