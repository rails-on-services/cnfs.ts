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
import { Router, ActivatedRoute } from '@angular/router';
import { CustomDataSource } from '@cnfs/angular-table';
import { IAction, NotificationService } from '@cnfs/common';
import { IUser } from '../../models/user.model';
import { UsersAdapter } from '../../services/users.adapter';

const enum ACTIONS {
  edit = 'edit',
  delete = 'delete',
}
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

  @Input() public actions: IAction[] = [
    { label: 'Edit user', icon: 'edit', action: ACTIONS.edit },
    { label: 'Delete user', icon: 'person_remove', action: ACTIONS.delete },
  ];

  @Output()
  private userClicked: EventEmitter<IUser> = new EventEmitter();

  @ViewChild(MatSort) public sort: MatSort;

  public dataSource: CustomDataSource<IUser>;

  public constructor(
    private usersAdapter: UsersAdapter,
    private notificationService: NotificationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
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

  private onDelete(user: IUser): void {
    this.notificationService.addPopup({
      title: 'Are you sure?',
      text: 'This cannot be reverted',
      okText: 'yes',
      noText: 'no',
      callback: (res) => {
        if (res) {
          this.usersAdapter.delete(user.id).subscribe(
            () => {
              this.notificationService.addSnack('User deleted');
              this.dataSource.refresh();
            },
            () => this.notificationService.addSnack('User deletion failed')
          );
        }
      },
    });
  }

  public onAction(action: string, user: IUser): void {
    if (action === ACTIONS.edit) {
      this.router.navigate(['..', 'edit-user', user.id], {
        relativeTo: this.activatedRoute,
      });
    } else if (action === ACTIONS.delete) {
      this.onDelete(user);
    }
  }

  public onClick(user: IUser): void {
    this.userClicked.next(user);
  }
}
