import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogComponent, NotificationService, PopupData } from '@cnfs/common';

@Component({
  selector: 'cnfs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public links: { label: string; route: string }[] = [
    { label: 'IAM', route: 'iam' },
  ];

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
