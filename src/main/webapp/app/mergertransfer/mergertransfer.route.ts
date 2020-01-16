import { Routes } from '@angular/router';

import { MergertransferComponent } from './mergertransfer.component';
import { AddmergerComponent } from './addmerger.component';

export const mergeTransferRoute: Routes = [
  { path: '', component: MergertransferComponent, data: { pageTitle: 'Merger/Transfer' } },
  { path: 'add', component: AddmergerComponent, data: { pageTitle: 'Merger/Transfer - Add a Merger' } }
];
