import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
/* jhipster-needle-add-admin-module-import - JHipster will add admin modules imports here */

@NgModule({
  imports: [
    /* jhipster-needle-add-admin-module - JHipster will add admin modules here */
    RouterModule.forChild([
      {
        path: 'customerfinancial',
        loadChildren: () => import('./customerfinancial/customerfinancial.module').then(m => m.CustomerfinancialModule)
      },
      {
        path: 'advpurposetype',
        loadChildren: () => import('./advpurposetype/advpurposetype.module').then(m => m.AdvpurposetypeModule)
      }
      /* jhipster-needle-add-admin-route - JHipster will add admin routes here */
    ])
  ]
})
export class MaintenanceRoutingModule {}
