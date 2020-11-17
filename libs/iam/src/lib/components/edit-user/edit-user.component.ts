import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'cnfs-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent {
  form: FormGroup = this.fb.group({
    firstName: [],
  });
  constructor(private fb: FormBuilder) {}

  onSave(): void {}

  onCancel(): void {}
}
