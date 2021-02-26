import { Component, OnInit } from '@angular/core';
import {Compte} from "./Compte";
import {AbonnementInscriptionService} from "../abonnement-inscription.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-achat-ticket-par-carte',
  templateUrl: './achat-ticket-par-carte.page.html',
  styleUrls: ['./achat-ticket-par-carte.page.scss'],
})
export class AchatTicketParCartePage implements OnInit {
  nom;
  num;
  mois;
  annee;
  code;
  codeConfirmation;
  compte:Compte=new Compte();
  validAchatCarte:number=0;
  constructor(private abonnementInscriptionService: AbonnementInscriptionService,private router:Router) { }

  ngOnInit() {
  }


  AchatParCarte() {
     this.compte.nom_porteur=this.nom;
     this.compte.numPaiement=this.num;
     this.compte.moisExpiration=this.mois;
     this.compte.anneeExpiration=this.annee;
     this.compte.codeVerification=this.code;
     console.log(this.compte);
    this.abonnementInscriptionService.achatParCarte(this.compte) .subscribe(data=>{
      if(data.status){
        alert(data.message);
        console.log("SUCCESS");
        this.validAchatCarte=1;
        localStorage.setItem('num_compte',this.num);
      }else if(!data.status){
        alert(data.message);
        this.num="";
        this.nom="";
         this.mois="";
        this.annee="";
        this.code="";
      }
    },err=>{
      console.log(err);
    });

  }

  confirmationAchatParCarte() {
    this.abonnementInscriptionService. confirmationAchatParCarte(this.codeConfirmation) .subscribe(data=>{
      if(data.status){
        alert(data.message);
        console.log("SUCCESS");
        this.codeConfirmation="";
        this.router.navigateByUrl('/tabs/tab1');
        this.validAchatCarte=0;
      }else if(!data.status){
        alert(data.message);
        this.codeConfirmation="";
      }
    },err=>{
      console.log(err);
    });

  }
}
