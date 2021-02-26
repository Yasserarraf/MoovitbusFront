import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PayerAbonnementService {

  constructor(private http: HttpClient) {

  }

   //Type d'abonnement
  
    public getAllAbonnements() {
      return this.http.get("assets/abonnements.json");
      
    }

  //Lignes
    public getAllLignes(){
      return this.http.get("assets/lignes.json");
    }
  
  //Confirmation
    public getConfirmation(){
      return this.http.get("assets/confirmation.json");
      
    }

    

}