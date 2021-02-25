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
  abonnements =[];
  lignes=[];
  selectedLigneVal = "";
  selectedAbonVal = "";
  informationInscription = new InformationInscription();

  constructor(private abonnementInscriptionService: AbonnementInscriptionService, private alertControl : AlertController) { 
        
  }

  ngOnInit(): void {
    this.getAbonnement();
    this.getLigne();

  }



  getAbonnement() {
    this.abonnementInscriptionService.getAbonnements().subscribe(
      data => {
        this.abonnements = data;
        console.log(this.abonnements);
      });
  }
  getLigne() {
    this.abonnementInscriptionService.getLignes().subscribe(
      data => {
        this.lignes = data;
        console.log(this.lignes);
      });
  }

  saveAbonnement(){
  console.log(this.selectedAbonVal);
  console.log(this.selectedLigneVal);

  this.informationInscription.id_abonnement = parseInt(this.selectedAbonVal);
  this.informationInscription.id_clt = +localStorage.getItem('user_id');
  this.informationInscription.id_ligne= parseInt(this.selectedLigneVal);
  console.log(this.informationInscription);
  this.abonnementInscriptionService.saveAbonnement(this.informationInscription).subscribe(
    data=>{
    console.log("successful") ;
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
