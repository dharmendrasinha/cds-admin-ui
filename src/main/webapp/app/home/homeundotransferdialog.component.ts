import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  templateUrl: './homeundotransferdialog.component.html'
})
export class HomeundotransferdialogComponent {
  constructor(public dialog: MatDialogRef<HomeundotransferdialogComponent>) {}

  closeTransferDialog() {
    this.dialog.close({ event: 'Cancel' });
  }

  undoTransfer() {
    this.dialog.close({ event: 'Undo' });
  }
}
