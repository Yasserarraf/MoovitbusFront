import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AchatTicketParCartePageRoutingModule } from './achat-ticket-par-carte-routing.module';

import { AchatTicketParCartePage } from './achat-ticket-par-carte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AchatTicketParCartePageRoutingModule
  ],
  declarations: [AchatTicketParCartePage]
})
export class AchatTicketParCartePageModule {}
