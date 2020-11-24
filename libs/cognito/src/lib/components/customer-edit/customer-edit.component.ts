import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'cnfs-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss'],
})
export class CustomerEditComponent {
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
