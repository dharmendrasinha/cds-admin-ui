import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  templateUrl: './undotransferdialog.component.html'
})
export class UndotransferdialogComponent {
  constructor(public dialog: MatDialogRef<UndotransferdialogComponent>) {}

  closeTransferDialog() {
    this.dialog.close({ event: 'Cancel' });
  }

  undoTransfer() {
    this.dialog.close({ event: 'Undo' });
  }
}
