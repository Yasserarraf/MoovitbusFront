import { Component, OnInit } from '@angular/core';
import {AbonnementInscriptionService} from "../abonnement-inscription.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-achat-ticket-par-solde',
  templateUrl: './achat-ticket-par-solde.page.html',
  styleUrls: ['./achat-ticket-par-solde.page.scss'],
})
export class AchatTicketParSoldePage implements OnInit {
  num_tel:string;
  code;
  validAchatSolde:number=0;
  constructor(private abonnementInscriptionService: AbonnementInscriptionService,private router:Router) { }

  ngOnInit() {
  }
  AchatParSolde(){
    console.log(this.num_tel)
    this.abonnementInscriptionService.achatParSolde(this.num_tel) .subscribe(data=>{
      if(data.status){
        alert(data.message);
        console.log("SUCCESS");
        this.validAchatSolde=1;
        localStorage.setItem('num_tel',this.num_tel);
      }else if(!data.status){
        alert(data.message);
        this.num_tel="";
      }
    },err=>{
      console.log(err);
    });
  }

  confirmationAchatParSolde() {
    this.abonnementInscriptionService. confirmationAchatParSolde(this.code) .subscribe(data=>{
      if(data.status){
        alert(data.message);
        console.log("SUCCESS");
        this.validAchatSolde=0;
        this.router.navigateByUrl('/tabs/tab1');
      }else if(!data.status){
        alert(data.message);
        this.code="";
      }
    },err=>{
      console.log(err);
    });

  }
}
