import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { CustomDataSource } from '@cnfs/angular-table';
import { IRole } from '../../models/role.model';
import { RolesAdapter } from '../../services/roles.adapter';

@Component({
  selector: 'cnfs-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss'],
})
export class RoleListComponent {
  @Input() public displayedColumns: string[] = ['name'];
  @Input() public filter: FormGroup | undefined;

  @ViewChild(MatSort) public sort: MatSort;

  public dataSource: CustomDataSource<IRole>;

  public constructor(private adapter: RolesAdapter) {
    this.dataSource = new CustomDataSource(adapter);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.filter && this.filter) {
      this.dataSource.filter$ = this.filter.valueChanges;
    }
  }

  public ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
}
