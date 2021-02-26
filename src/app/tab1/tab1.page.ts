import { Component } from '@angular/core';
import {AbonnementInscriptionService} from "../abonnement-inscription.service";
import {AlertController} from "@ionic/angular";
import {SuivreBusService} from "../suivre-bus.service";
import {Ticket} from "./Ticket";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    achat:number=4;
    stations;
    station_Dep;
    station_Dist;
    selectedLigneVal;
    method_paiement;
    lignes=[];
    ticket: Ticket = new Ticket();
    constructor(private router:Router, private suivreBusService:SuivreBusService, private abonnementInscriptionService: AbonnementInscriptionService, private alertControl : AlertController) {}
    ngOnInit(): void {
        this.getLigne();

    }
    getLigne() {
        this.abonnementInscriptionService.getLignes().subscribe(
            data => {
                this.lignes = data;
                console.log(this.lignes);
            });
    }

    submit() {
        console.log( localStorage.getItem('user_id'))
      this.ticket.id_client =+ localStorage.getItem('user_id');
      this.ticket.id_ligne_bus=+ this.selectedLigneVal;
      this.ticket.station_dep=+ this.station_Dep;
      this.ticket.station_des=+ this.station_Dist;
      this.ticket.methodPaiement=+this.method_paiement;
      console.log(this.ticket);
   this.abonnementInscriptionService.infoTicket(this.ticket).subscribe(data=>{
           console.log("successful") ;
           if(this.ticket.methodPaiement==0){
               this.router.navigateByUrl("/tabs/achatTicketParSolde");
           }else if(this.ticket.methodPaiement==1){
               this.router.navigateByUrl("/tabs/achatTicketParCarte");
           }
       },
       error=>{
       console.log("failed");
    });
    }

    recupererStations() {
        console.log(this.selectedLigneVal)
        this.abonnementInscriptionService.getStations(this.selectedLigneVal)
            .subscribe(data=>{
                this.stations=data;
            },err=>{
                console.log(err);
            });
    }


}
