import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { CustomDataSource } from '@cnfs/angular-table';

import { IUser } from '../user.model';
import { UsersAdapter } from '../users.adapter';

@Component({
  selector: 'cnfs-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements AfterViewInit {
  dataSource: CustomDataSource<IUser>;
  displayedColumns: string[] = ['firstName', 'createdAt'];
  @ViewChild(MatSort) sort: MatSort;
  control: FormControl = new FormControl();
  placeholder = 'search';

  constructor(usersAdapter: UsersAdapter) {
    this.dataSource = new CustomDataSource(usersAdapter);
    this.control.valueChanges.subscribe(
      (value) => (this.dataSource.filter = { firstName: value })
    );
  }

  ngAfterViewInit(): void {
    this.dataSource.registerSort(this.sort);
  }
}
