import { Component } from '@angular/core';

@Component({
  selector: 'cnfs-iam',
  templateUrl: './iam.component.html',
  styleUrls: ['./iam.component.scss'],
})
export class IamComponent {
  public links = [
    { path: 'users', label: 'Users' },
    { path: 'groups', label: 'Groups' },
    { path: 'roles', label: 'Roles' },
  ];
}
