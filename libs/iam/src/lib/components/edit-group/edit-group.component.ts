import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '@cnfs/common';
import { IGroup } from '../../models/group.model';
import { GroupsAdapter } from '../../services/groups.adapter';

@Component({
  selector: 'cnfs-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.scss'],
})
export class EditGroupComponent implements OnChanges {
  @Output() public done: EventEmitter<boolean> = new EventEmitter();
  @Input() public group: IGroup | undefined;
  public form: FormGroup = this.fb.group({
    name: [null, [Validators.required, Validators.minLength(1)]],
  });

  public constructor(
    private fb: FormBuilder,
    private adapter: GroupsAdapter,
    private notificationService: NotificationService
  ) {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.group && this.group) {
      this.form.setValue({ name: this.group.name });
    }
  }

  public onSave(): void {
    const req = this.group
      ? this.adapter.update(this.group.id, { name: this.form.value.name })
      : this.adapter.create({ name: this.form.value.name });
    req.subscribe(
      () => {
        this.notificationService.addSnack('Group properly saved');
        this.done.next(true);
      },
      (err) => {
        this.notificationService.addSnack(`Could not save group '${err}'`);
      }
    );
  }

  public onCancel(): void {
    this.done.next(false);
  }
}
