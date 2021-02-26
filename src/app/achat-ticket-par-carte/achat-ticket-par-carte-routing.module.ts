import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AchatTicketParCartePage } from './achat-ticket-par-carte.page';

const routes: Routes = [
  {
    path: '',
    component: AchatTicketParCartePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AchatTicketParCartePageRoutingModule {}
