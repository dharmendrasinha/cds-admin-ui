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
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';

import { mergeTransferRoute } from './mergertransfer.route';
import { MergertransferComponent } from './mergertransfer.component';
import { AddmergerComponent } from './addmerger.component';
import { AddtransferComponent } from './addtransfer.component';
import { UndomergerdialogComponent } from './undomergerdialog.component';
import { UndotransferdialogComponent } from './undotransferdialog.component';

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
    MatTabsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule
  ],
  declarations: [MergertransferComponent, AddmergerComponent, AddtransferComponent, UndomergerdialogComponent, UndotransferdialogComponent],
  exports: [MatPaginatorModule, MatTableModule],
  providers: [MatNativeDateModule],
  entryComponents: [UndotransferdialogComponent, UndomergerdialogComponent]
})
export class MergeTransferRouteModule {}
