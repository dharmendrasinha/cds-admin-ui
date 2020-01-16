import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  templateUrl: './deletecustomerdialog.component.html'
})
export class DeletecustomerdialogComponent {
  constructor(public dialog: MatDialogRef<DeletecustomerdialogComponent>) {}

  closeDialog() {
    this.dialog.close({ event: 'Cancel' });
  }

  delete() {
    this.dialog.close({ event: 'Delete' });
  }
}
