import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { CustomDataSource } from '@cnfs/angular-table';
import { NotificationService } from '@cnfs/common';
import { IUser } from '../../models/user.model';
import { UsersAdapter } from '../../services/users.adapter';

@Component({
  selector: 'cnfs-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements AfterViewInit, OnChanges {
  @Input() public displayedColumns: string[] = [
    'firstName',
    'createdAt',
    'actions',
  ];
  @Input() public filter: FormGroup | undefined;

  @ViewChild(MatSort) public sort: MatSort;

  @Output()
  private userClicked: EventEmitter<IUser> = new EventEmitter();

  public dataSource: CustomDataSource<IUser>;

  public constructor(
    private usersAdapter: UsersAdapter,
    private notificationService: NotificationService
  ) {
    this.dataSource = new CustomDataSource(usersAdapter);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.filter && this.filter) {
      this.dataSource.filter$ = this.filter.valueChanges;
    }
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

  public onClick(user: IUser): void {
    this.userClicked.next(user);
  }
}
