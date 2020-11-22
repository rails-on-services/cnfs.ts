import { Subject } from 'rxjs';
import { NotificationService } from '@cnfs/common';

// { provide: NotificationService, useValue: notificationServiceMock },
export const notificationServiceMock: Partial<NotificationService> = {
  $snack: new Subject(),
  $popup: new Subject(),
};
