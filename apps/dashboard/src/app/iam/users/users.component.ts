import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CustomDataSource } from '../../table-data/custom-data-source';
import { IUser } from '../user.model';
import { UsersService } from '../users.service';
import { MatSort } from '@angular/material/sort';
import { FormControl } from '@angular/forms';

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

  constructor(usersService: UsersService) {
    this.dataSource = new CustomDataSource(usersService);
    this.control.valueChanges.subscribe(
      (value) => (this.dataSource.filter = { firstName: value })
    );
  }

  ngAfterViewInit(): void {
    this.dataSource.registerSort(this.sort);
  }
}
