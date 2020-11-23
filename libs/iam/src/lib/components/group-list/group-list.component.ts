import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { CustomDataSource } from '@cnfs/angular-table';

import { IGroup } from '../../models/group.model';
import { GroupsAdapter } from '../../services/groups.adapter';

@Component({
  selector: 'cnfs-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss'],
})
export class GroupListComponent implements OnChanges, AfterViewInit {
  @Input() public displayedColumns: string[] = ['name', 'actions'];
  @Input() public filter: FormGroup | undefined;

  @ViewChild(MatSort) public sort: MatSort;

  public dataSource: CustomDataSource<IGroup>;

  public constructor(private groupsAdapter: GroupsAdapter) {
    this.dataSource = new CustomDataSource(groupsAdapter);
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
