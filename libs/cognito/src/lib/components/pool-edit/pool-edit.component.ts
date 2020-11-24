import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'cnfs-pool-edit',
  templateUrl: './pool-edit.component.html',
  styleUrls: ['./pool-edit.component.scss'],
})
export class PoolEditComponent {
  @Output()
  private done: EventEmitter<boolean> = new EventEmitter();

  public form: FormGroup = this.fb.group({});

  public constructor(private fb: FormBuilder) {}

  public onCancel(): void {
    this.done.next(false);
  }

  public onSave(): void {
    //TODO
    this.done.next(true);
  }
}
