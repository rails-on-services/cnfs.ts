import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { CustomDataSource } from '@cnfs/angular-table';
import { IAction } from '@cnfs/common';
import { IGroup } from '../../models/group.model';
import { GroupsAdapter } from '../../services/groups.adapter';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cnfs-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss'],
})
export class GroupListComponent implements OnChanges, AfterViewInit {
  @Input() public displayedColumns: string[] = ['name', 'actions'];
  @Input() public filter: FormGroup | undefined;
  @Input() public actions: IAction[] = [
    { label: 'Edit Group', icon: 'edit', action: 'edit' },
  ];

  @ViewChild(MatSort) public sort: MatSort;

  public dataSource: CustomDataSource<IGroup>;

  public constructor(
    groupsAdapter: GroupsAdapter,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
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

  public onAction(action: string, group: IGroup): void {
    if (action === 'edit') {
      this.router.navigate(['..', 'edit-group', group.id], {
        relativeTo: this.activatedRoute,
      });
    }
  }
}
