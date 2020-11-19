import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { CustomDataSource } from '@cnfs/angular-table';
import { NotificationService } from '@cnfs/common';
import { IUser } from '../../models/user.model';
import { UsersAdapter } from '../../services/users.adapter';

@Component({
  selector: 'cnfs-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements AfterViewInit {
  public dataSource: CustomDataSource<IUser>;
  public displayedColumns: string[] = ['firstName', 'createdAt', 'actions'];
  @ViewChild(MatSort) public sort: MatSort;
  public filter: FormGroup = this.fb.group({
    firstName: [],
  });

  public constructor(
    private usersAdapter: UsersAdapter,
    private fb: FormBuilder,
    private notificationService: NotificationService
  ) {
    this.dataSource = new CustomDataSource(usersAdapter);
    this.dataSource.filter$ = this.filter.valueChanges;
  }

  public ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  public onDelete(user: IUser): void {
    this.notificationService.addPopup({
      title: 'Are you sure?',
      text: 'This cannot be reverted',
      okText: 'yes',
      noText: 'no',
      callback: (res) => {
        if (res) {
          this.usersAdapter.delete(user.id).subscribe(
            () => this.notificationService.addSnack('User deleted'),
            () => this.notificationService.addSnack('User deletion failed')
          );
        }
      },
    });
  }
}
