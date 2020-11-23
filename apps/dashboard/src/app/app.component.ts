import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogComponent, NotificationService, PopupData } from '@cnfs/common';
import { ILink } from './ilink';
import { links } from './routes';

@Component({
  selector: 'cnfs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public links: ILink[] = links;

  public constructor(
    private notificationService: NotificationService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.notificationService.$snack.subscribe((msg: string) =>
      this.snackBar.open(msg, 'x', { duration: 2000 })
    );
    this.notificationService.$popup.subscribe((data: PopupData) =>
      this.dialog.open(DialogComponent, { data })
    );
  }
}
