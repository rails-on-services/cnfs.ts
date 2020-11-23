import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';
import { IGroup } from '../../models/group.model';
import { GroupsAdapter } from '../../services/groups.adapter';

@Component({
  templateUrl: './edit-group-page.component.html',
  styleUrls: ['./edit-group-page.component.scss'],
})
export class EditGroupPageComponent {
  public group: IGroup;

  public constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private router: Router,
    service: GroupsAdapter
  ) {
    this.activatedRoute.paramMap
      .pipe(
        filter((ps: ParamMap) => ps.has('groupId')),
        map((ps: ParamMap) => ps.get('groupId')),
        switchMap((id: string) => service.getOne(id))
      )
      .subscribe((group: IGroup) => (this.group = group));
  }

  public next(): void {
    try {
      this.location.back();
    } catch {
      this.router.navigate(['..', '..', 'groups']);
    }
  }
}
