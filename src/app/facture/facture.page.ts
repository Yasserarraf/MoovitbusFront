import { Component, OnInit } from '@angular/core';
import {AbonnementInscriptionService} from "../abonnement-inscription.service";
import {Router} from "@angular/router";
import {Facture} from "../tab3/Facture";

@Component({
  selector: 'app-facture',
  templateUrl: './facture.page.html',
  styleUrls: ['./facture.page.scss'],
})
export class FacturePage implements OnInit {
 facture:Facture[];
  constructor(private abonnementInscriptionService: AbonnementInscriptionService,private router:Router) { }

  ngOnInit() {
    this.getFacture();
  }
   public getFacture(){

    this.abonnementInscriptionService.facture().subscribe(data=>{
      console.log(data[0].codeAbonne);
      this.facture=data;
    })
   }

  submit(codeAbonne:string) {
 console.log(codeAbonne)
    localStorage.setItem("codeAbonnee",codeAbonne);
    this.router.navigateByUrl("/tabs/tab3");
  }
}
