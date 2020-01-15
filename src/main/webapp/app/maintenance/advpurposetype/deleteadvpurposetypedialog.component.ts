import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  templateUrl: './deleteadvpurposetypedialog.component.html'
})
export class DeleteadvpurposetypedialogComponent {
  constructor(public dialog: MatDialogRef<DeleteadvpurposetypedialogComponent>) {}

  closeDialog() {
    this.dialog.close();
  }
}
