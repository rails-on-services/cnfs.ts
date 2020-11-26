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
import { IPool } from '../../models/pool';
import { PoolsAdapter } from '../../services/pools.adapter';

@Component({
  selector: 'cnfs-pool-edit',
  templateUrl: './pool-edit.component.html',
  styleUrls: ['./pool-edit.component.scss'],
})
export class PoolEditComponent implements OnChanges {
  @Output()
  private done: EventEmitter<boolean> = new EventEmitter();

  @Input()
  private pool: IPool | undefined;

  public form: FormGroup = this.fb.group({
    name: [null, [Validators.required, Validators.minLength(0)]],
  });

  public constructor(
    private fb: FormBuilder,
    private adapter: PoolsAdapter,
    private notificationService: NotificationService
  ) {}

  public onCancel(): void {
    this.done.next(false);
  }

  public onSave(): void {
    if (this.form.valid) {
      const attributes = { name: this.form.value.name };
      const req = this.pool
        ? this.adapter.update(this.pool.id, attributes)
        : this.adapter.create(attributes);
      req.subscribe(
        () => {
          this.notificationService.addSnack('✅ Pool successfully saved!');
          this.done.next(true);
        },
        () => this.notificationService.addSnack('❌ Failed Pool saving!')
      );
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.pool && this.pool) {
      this.form.setValue({ name: this.pool.name });
    }
  }
}
