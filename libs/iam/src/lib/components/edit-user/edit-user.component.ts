import { filter, map, switchMap, tap } from 'rxjs/operators';

import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NotificationService } from '@cnfs/common';

import { IUser } from '../../models/user.model';
import { UsersAdapter } from '../../services/users.adapter';

@Component({
  selector: 'cnfs-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent {
  public form: FormGroup = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(1)]],
  });
  private user: IUser | null = null;

  public constructor(
    private fb: FormBuilder,
    private router: Router,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private service: UsersAdapter,
    private notificationService: NotificationService
  ) {
    this.activatedRoute.paramMap
      .pipe(
        filter((ps: ParamMap) => ps.has('userId')),
        map((ps: ParamMap) => ps.get('userId')),
        switchMap((id: string) => this.service.getOne(id)),
        tap((user: IUser | null) => {
          if (user) {
            this.form.setValue({ firstName: user.firstName });
          }
        })
      )
      .subscribe((user: IUser) => (this.user = user));
  }

  public onSave(): void {
    if (!this.form.valid) {
      return;
    }

    const obs = this.user
      ? this.service.update(this.user.id, {
          firstName: this.form.value.firstName,
        })
      : this.service.create({ firstName: this.form.value.firstName });
    obs.subscribe(
      () => {
        this.notificationService.addSnack(`Item saved`);
        this.onCancel();
      },
      (err) =>
        this.notificationService.addSnack(`Failed to save user '${err}'`),
      () => console.log('finally')
    );
  }

  public onCancel(): void {
    try {
      this.location.back();
    } catch {
      this.router.navigate(['..', '..', 'users']);
    }
  }
}
