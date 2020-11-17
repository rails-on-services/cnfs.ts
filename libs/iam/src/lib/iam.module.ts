import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { IamComponent } from './iam.component';
import { UsersService } from './users.service';
import { UsersComponent } from './users/users.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: IamComponent,
    children: [
      { path: 'users', component: UsersComponent, pathMatch:'prefix' },
      { path: '', pathMatch: 'full',  redirectTo: 'users' },
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
    RouterModule.forChild(routes),
  ],
  providers: [UsersService],
})
export class IamModule {}
