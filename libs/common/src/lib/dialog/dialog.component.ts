import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface PopupData {
  title?: string;
  text?: string;
  okText?: string;
  noText?: string;
  callback?: (bool) => void;
}

@Component({
  selector: 'cnfs-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  public constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PopupData
  ) {}

  public onNoClick(): void {
    this.dialogRef.close(false);
    if (this.data.callback) {
      this.data.callback(false);
    }
  }

  public onYesClick(): void {
    this.dialogRef.close(true);
    if (this.data.callback) {
      this.data.callback(true);
    }
  }
}
