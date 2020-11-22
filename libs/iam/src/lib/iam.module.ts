import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
import { CnfsCommonModule } from '@cnfs/common';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { GroupListComponent } from './components/group-list/group-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { MockUsersService } from './mocks/mock.users.service';
import { GroupsComponent } from './pages/groups/groups.component';
import { IamComponent } from './pages/iam/iam.component';
import { RolesComponent } from './pages/roles/roles.component';
import { UsersComponent } from './pages/users/users.component';
import { routes } from './routes';
import { GroupsAdapter } from './services/groups.adapter';
import { UsersAdapter } from './services/users.adapter';
import { IUsersService } from './services/users.service';

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
    { provide: IUsersService, useClass: MockUsersService },
    UsersAdapter,
    GroupsAdapter,
  ],
})
export class IamModule {}
