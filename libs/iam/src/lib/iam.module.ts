import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from '@cnfs/angular-table';
import { CnfsCommonModule } from '@cnfs/common';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { UsersComponent } from './components/users/users.component';
import { IamComponent } from './pages/iam.component';
import { MockUsersService } from './services/mock.users.service';
import { UsersAdapter } from './services/users.adapter';
import { IUsersService } from './services/users.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: IamComponent,
    children: [
      { path: 'users', component: UsersComponent, pathMatch: 'prefix' },
      {
        path: 'edit/:userId',
        component: EditUserComponent,
        pathMatch: 'prefix',
      },
      { path: '', pathMatch: 'full', redirectTo: 'users' },
    ],
  },
  // { path: '*', redirectTo: '' },
];
@NgModule({
  declarations: [IamComponent, UsersComponent, EditUserComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatProgressBarModule,
    CnfsCommonModule,
    TableModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    { provide: IUsersService, useClass: MockUsersService },
    UsersAdapter,
  ],
})
export class IamModule {}
