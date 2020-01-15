import { Routes } from '@angular/router';

import { AdvpurposetypeComponent } from './advpurposetype.component';
import { AddnewComponent } from './addnew.component';
import { EditComponent } from './edit.component';

export const advPurposeTypeRoute: Routes = [
  { path: '', component: AdvpurposetypeComponent, data: { pageTitle: 'Advance - Purpose Type' } },
  { path: 'add', component: AddnewComponent, data: { pageTitle: 'Advance - Purpose Type - Add New' } },
  { path: 'edit/:id', component: EditComponent, data: { pageTitle: 'Advance - Purpose Type - Edit' } }
];
