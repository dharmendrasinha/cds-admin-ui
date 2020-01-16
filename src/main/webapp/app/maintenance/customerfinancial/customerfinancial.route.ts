import { Routes } from '@angular/router';

import { CustomerfinancialComponent } from './customerfinancial.component';
import { AddcustomerComponent } from './addcustomer.component';
import { EditcustomerComponent } from './editcustomer.component';

export const customerfinancialRoute: Routes = [
  { path: '', component: CustomerfinancialComponent, data: { pageTitle: 'Customer Financial' } },
  { path: 'add', component: AddcustomerComponent, data: { pageTitle: 'Add New Customer' } },
  { path: 'edit/:id', component: EditcustomerComponent, data: { pageTitle: 'Edit Customer' } }
];
