import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'cnfs-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  public filter: FormGroup = this.fb.group({
    firstName: [],
  });
  public constructor(private fb: FormBuilder) {}
}
