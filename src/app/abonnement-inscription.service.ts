import { Lignes } from './tab4/Ligne';
import { InformationInscription } from './tab4/InformationInscription';
import { HttpClient } from '@angular/common/http';
import { Abonnement } from './tab4/Abonnement';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AbonnementInscriptionService {
  AbonnementUrl = 'http://localhost:8080/Abonnements';
  LigneUrl = 'http://localhost:8080/lignes';

  constructor(private httpClient: HttpClient) { }

  getAbonnements() {
    return this.httpClient.get<Abonnement[]>(this.AbonnementUrl);
  }

  getLignes() {
    return this.httpClient.get<Lignes[]>(this.LigneUrl);
  }

  saveAbonnement(informationInscription: InformationInscription) : Observable<any>{
    const url = 'http://localhost:8080/Abonnements/inscription';
    return this.httpClient.post<any>(url, informationInscription);
  }
}

