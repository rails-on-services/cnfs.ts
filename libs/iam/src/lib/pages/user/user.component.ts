import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';
import { IUser } from '../../models/user.model';
import { UsersAdapter } from '../../services/users.adapter';

@Component({
  selector: 'cnfs-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  public user: IUser;
  public constructor(
    private activatedRoute: ActivatedRoute,
    service: UsersAdapter
  ) {
    this.activatedRoute.paramMap
      .pipe(
        filter((ps: ParamMap) => ps.has('userId')),
        map((ps: ParamMap) => ps.get('userId')),
        switchMap((id: string) => service.getOne(id))
      )
      .subscribe((user: IUser) => (this.user = user));
  }
}
