import { Component } from '@angular/core';
import { ILink } from '@cnfs/common';

@Component({
  selector: 'cnfs-iam',
  templateUrl: './iam.component.html',
  styleUrls: ['./iam.component.scss'],
})
export class IamComponent {
  public links: ILink[] = [
    { route: 'users', label: 'Users' },
    { route: 'groups', label: 'Groups' },
    { route: 'roles', label: 'Roles' },
  ];
}
