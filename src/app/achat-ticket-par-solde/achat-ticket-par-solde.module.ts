import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AchatTicketParSoldePageRoutingModule } from './achat-ticket-par-solde-routing.module';

import { AchatTicketParSoldePage } from './achat-ticket-par-solde.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AchatTicketParSoldePageRoutingModule
  ],
  declarations: [AchatTicketParSoldePage]
})
export class AchatTicketParSoldePageModule {}
