import { Component } from '@angular/core';
import { ILink } from '@cnfs/common';

@Component({
  selector: 'cnfs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public links: ILink[] = [
    { label: 'Customers', route: 'customers' },
    { label: 'Pools', route: 'pools' },
  ];
}
