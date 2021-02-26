import {HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { PayerAbonnementService } from './payer-abonnement.service';
import { AlertController} from "@ionic/angular";




@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit { 

  data: Array<any>
  user: any = {};
  status: string= "";

  constructor(private payerAbonnementService:PayerAbonnementService,private http:HttpClient, private alert:AlertController) {
  }

 //variables   
 lignes;
 abonnements;
 message;
 selectedLigne;
 selectedAbonnement;
 
 nom : String; 
 numPaiement:String;
 moisExpiration:String;
 anneeExpiration: String;
 codeVerification:String;
 

  ngOnInit(){
    //lignes
    this.payerAbonnementService.getAllLignes()
    .subscribe(data=>{
        this.lignes=data;
    },err=>{
        console.log(err);
    });

    //abonnement
    this.payerAbonnementService.getAllAbonnements()
    .subscribe(data=>{
        this.abonnements=data;
    },err=>{
        console.log(err);
    });

    
    
  }

  //user Data
  postData(){
     
    this.http.post("http://localhost:8080/Abonnements/paiement" , this.user).subscribe((res : any) => {
      console.log(res);
      alert("Votre reçu de paiement a été envoyé à votre email!")
    });
  };

  //confirmation
  OpenConfirmDialogue(){
    this.alert.create({
      header: "Confirm!",
      //subHeader: "Are you sure?",
      buttons: [
        {
          text: "Cancel",
          handler: (data)=>{
            this.status = "confirm cancelled!"
          }
        },
        {
          text: "OK",
          handler: (data)=>{
            this.status = "Votre reçu de paiement a été envoyée à votre email"
          }
        }
      ]
    }).then((confirmElement)=>{
      confirmElement.present();
    })
  }
}
