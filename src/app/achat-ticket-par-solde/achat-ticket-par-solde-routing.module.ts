import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AchatTicketParSoldePage } from './achat-ticket-par-solde.page';

const routes: Routes = [
  {
    path: '',
    component: AchatTicketParSoldePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AchatTicketParSoldePageRoutingModule {}
