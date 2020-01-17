import { Routes } from '@angular/router';

import { MergertransferComponent } from './mergertransfer.component';
import { AddmergerComponent } from './addmerger.component';
import { AddtransferComponent } from './addtransfer.component';

export const mergeTransferRoute: Routes = [
  { path: '', component: MergertransferComponent, data: { pageTitle: 'Merger/Transfer' } },
  { path: 'addmerger', component: AddmergerComponent, data: { pageTitle: 'Merger/Transfer - Add a Merger' } },
  { path: 'addtransfer', component: AddtransferComponent, data: { pageTitle: 'Merger/Transfer - Add a Transfer' } }
];
