import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { PopupData } from './dialog/dialog.component';

@Injectable()
export class NotificationService {
  private $snackSubject: Subject<string> = new Subject();
  private $popupSubject: Subject<PopupData> = new Subject();

  public addSnack(msg: string): void {
    this.$snackSubject.next(msg);
  }

  public get $snack(): Observable<string> {
    return this.$snackSubject;
  }

  public addPopup(data: PopupData): void {
    this.$popupSubject.next(data);
  }

  public get $popup(): Observable<PopupData> {
    return this.$popupSubject;
  }
}
