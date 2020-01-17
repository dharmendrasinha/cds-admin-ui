import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  templateUrl: './homeundomergerdialog.component.html'
})
export class HomeundomergerdialogComponent {
  constructor(public dialog: MatDialogRef<HomeundomergerdialogComponent>) {}

  closeMergerDialog() {
    this.dialog.close({ event: 'Cancel' });
  }

  undoMerger() {
    this.dialog.close({ event: 'Undo' });
  }
}
