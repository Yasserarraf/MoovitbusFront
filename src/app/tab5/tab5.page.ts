import { Lignes } from './Ligne';
import { InformationInscription } from './InformationInscription';
import { AbonnementInscriptionService } from '../abonnement-inscription.service';
import { Abonnement } from './Abonnement';
import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {
  abonnements: Abonnement[] = [];
  lignes: Lignes[] = [];
  selectedValues : string[]=[];
  informationInscription = new InformationInscription();

  constructor(private abonnementInscriptionService: AbonnementInscriptionService, private alertControl : AlertController) { 
        
  }

  ngOnInit(): void {
    this.getAbonnement();
    this.getLigne();
    this.selectedValues;
  }



  getAbonnement() {
    this.abonnementInscriptionService.getAbonnements().subscribe(
      data => {
        this.abonnements = data;
      });
  }
  getLigne() {
    this.abonnementInscriptionService.getLignes().subscribe(
      data => {
        this.lignes = data;
      });
  }

  saveAbonnement(){
  this.abonnementInscriptionService.saveAbonnement(this.informationInscription).subscribe(
    data=>{
    console.log("successful") 
    },
    error=>console.log("failed")
)
  }
async displayAlert(){
  await this.alertControl.create({
    message:"Inscription réussie",
  }).then(res=>res.present());
}
}
