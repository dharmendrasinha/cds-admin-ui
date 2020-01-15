import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CdsadminuiSharedModule } from 'app/shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatTableExporterModule } from 'mat-table-exporter';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';

import { mergeTransferRoute } from './mergertransfer.route';
import { MergertransferComponent } from './mergertransfer.component';

@NgModule({
  imports: [
    CdsadminuiSharedModule,
    RouterModule.forChild(mergeTransferRoute),
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatTableExporterModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatTabsModule
  ],
  declarations: [MergertransferComponent],
  exports: [MatPaginatorModule, MatTableModule]
})
export class MergeTransferRouteModule {}
