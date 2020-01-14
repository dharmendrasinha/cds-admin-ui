import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { CdsadminuiSharedModule } from 'app/shared/shared.module';
import { CdsadminuiCoreModule } from 'app/core/core.module';
import { CdsadminuiAppRoutingModule } from './app-routing.module';
import { CdsadminuiHomeModule } from './home/home.module';
import { CdsadminuiEntityModule } from './entities/entity.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    CdsadminuiSharedModule,
    CdsadminuiCoreModule,
    CdsadminuiHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    CdsadminuiEntityModule,
    CdsadminuiAppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class CdsadminuiAppModule {}
