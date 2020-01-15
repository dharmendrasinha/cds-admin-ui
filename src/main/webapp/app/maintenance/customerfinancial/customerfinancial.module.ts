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

import { CustomerfinancialComponent } from './customerfinancial.component';
import { AddcustomerComponent } from './addcustomer.component';

import { customerfinancialRoute } from './customerfinancial.route';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CdsadminuiSharedModule,
    RouterModule.forChild(customerfinancialRoute),
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatTableExporterModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [CustomerfinancialComponent, AddcustomerComponent],
  exports: [MatPaginatorModule, MatTableModule]
})
export class CustomerfinancialModule {}
