import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  templateUrl: './undomergerdialog.component.html'
})
export class UndomergerdialogComponent {
  constructor(public dialog: MatDialogRef<UndomergerdialogComponent>) {}

  closeMergerDialog() {
    this.dialog.close({ event: 'Cancel' });
  }

  undoMerger() {
    this.dialog.close({ event: 'Undo' });
  }
}
