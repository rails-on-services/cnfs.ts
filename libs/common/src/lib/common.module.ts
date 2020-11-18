import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from './notification.service';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

// make sure we have only one instance of the NotificationService
export function notificationServiceFactory(): NotificationService {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  if (window.notificationService === undefined) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    window.notificationService = new NotificationService();
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  return window.notificationService;
}

@NgModule({
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  providers: [
    { provide: NotificationService, useFactory: notificationServiceFactory },
  ],
  declarations: [DialogComponent],
  exports: [DialogComponent],
})
export class CnfsCommonModule {}
