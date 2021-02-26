import {HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AlertController} from "@ionic/angular";
import {Router} from '@angular/router';
import {Compte} from "../achat-ticket-par-carte/Compte";
import {AbonnementInscriptionService} from "../abonnement-inscription.service";




@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  data: Array<any>
  user: any = {};
  status: string= "";

  constructor(private abonnementInscriptionService:AbonnementInscriptionService,private http:HttpClient, private alert:AlertController, public router:Router) {
  }

  nom;
  num;
  mois;
  annee;
  code;
  codeConfirmation;
  compte:Compte=new Compte();
  validAchatCarte:number=0;


  ngOnInit(){


  }



  paiement() {
    this.compte.nom_porteur=this.nom;
    this.compte.numPaiement=this.num;
    this.compte.moisExpiration=this.mois;
    this.compte.anneeExpiration=this.annee;
    this.compte.codeVerification=this.code;
    console.log(this.compte);
    this.abonnementInscriptionService.paiement(this.compte) .subscribe(data=>{
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

  confirmationPaiement() {
    this.abonnementInscriptionService. confirmationPaiement(this.codeConfirmation) .subscribe(data=>{
      if(data.status){
        alert(data.message);
        console.log("SUCCESS");
        this.codeConfirmation="";
        this.router.navigateByUrl('/tabs/maFacture');
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
