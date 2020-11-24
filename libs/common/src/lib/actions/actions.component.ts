import { Component, Input, EventEmitter, Output } from '@angular/core';
import { IAction } from '../iaction';

@Component({
  selector: 'cnfs-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
})
export class ActionsComponent {
  @Input()
  public actions: IAction[] = [];

  @Output()
  private action: EventEmitter<string> = new EventEmitter();

  @Input()
  public maxVisibleActions: number = 2;

  public onClick(action: string): void {
    this.action.next(action);
  }
}
