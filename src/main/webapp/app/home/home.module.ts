import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CdsadminuiSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';
import { HomenotificationsComponent } from './homenotifications.components';
import { MergetransfersComponent } from './mergetransfers.component';
import { HomemaintenanceComponent } from './homemaintenance.component';
import { HomereportsComponent } from './homereports.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { HomeundomergerdialogComponent } from './homeundomergerdialog.component';
import { HomeundotransferdialogComponent } from './homeundotransferdialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CdsadminuiSharedModule,
    RouterModule.forChild([HOME_ROUTE]),
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatInputModule
  ],
  declarations: [
    HomeComponent,
    HomenotificationsComponent,
    MergetransfersComponent,
    HomemaintenanceComponent,
    HomereportsComponent,
    HomeundomergerdialogComponent,
    HomeundotransferdialogComponent
  ],
  entryComponents: [HomeundomergerdialogComponent, HomeundotransferdialogComponent]
})
export class HomeModule {}
