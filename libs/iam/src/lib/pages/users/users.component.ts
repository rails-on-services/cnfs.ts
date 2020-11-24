import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IUser } from '../../models/user.model';

@Component({
  selector: 'cnfs-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  public filter: FormGroup = this.fb.group({
    firstName: [],
  });

  public constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  public userClicked(user: IUser): void {
    this.router.navigate(['..', 'user', user.id], {
      relativeTo: this.activatedRoute,
    });
  }
}
