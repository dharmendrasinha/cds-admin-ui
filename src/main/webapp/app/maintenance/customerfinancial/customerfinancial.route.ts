import { Routes } from '@angular/router';

import { CustomerfinancialComponent } from './customerfinancial.component';
import { AddcustomerComponent } from './addcustomer.component';

export const customerfinancialRoute: Routes = [
  { path: '', component: CustomerfinancialComponent, data: { pageTitle: 'Customer Financial' } },
  { path: 'add', component: AddcustomerComponent, data: { pageTitle: 'Add New Customer' } }
];
