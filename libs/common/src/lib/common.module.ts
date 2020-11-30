import { CommonModule } from '@angular/common';
import { InjectionToken, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActionsComponent } from './actions/actions.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { DialogComponent } from './dialog/dialog.component';
import { NotificationService } from './notification.service';

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

export const BASE_URL = new InjectionToken<string>('BaseUrl');

const components = [DialogComponent, ComingSoonComponent, ActionsComponent];

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
  ],
  providers: [
    { provide: NotificationService, useFactory: notificationServiceFactory },
    { provide: BASE_URL, useValue: '' },
  ],
  declarations: [...components],
  exports: [...components],
})
export class CnfsCommonModule {}
