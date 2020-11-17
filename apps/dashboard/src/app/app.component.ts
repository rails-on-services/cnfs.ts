import { Component } from '@angular/core';

@Component({
  selector: 'cnfs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  links: { label: string, route: string }[] = [{ label: 'IAM', route: 'iam' }];
}
