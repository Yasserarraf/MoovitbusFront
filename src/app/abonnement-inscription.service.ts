import { Lignes } from './tab5/Ligne';
import { InformationInscription } from './tab5/InformationInscription';
import { HttpClient } from '@angular/common/http';
import { Abonnement } from './tab5/Abonnement';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Ticket} from "./tab1/Ticket";
import { Response } from './achat-ticket-par-solde/Response';
import {Compte} from "./achat-ticket-par-carte/Compte";
import {Facture} from "./tab3/Facture";

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

  saveAbonnement(informationInscription) : Observable<any>{
    let url = 'http://localhost:8080/Abonnements/inscription';
    console.log(informationInscription);
    return this.httpClient.post(url, informationInscription);
  }
  getStations(id_ligne:number):Observable<any>{
    let url='http://localhost:8080/station/'+id_ligne;
    return this.httpClient.get(url);
  }

  infoTicket(ticket:Ticket) : Observable<any>{
    let url = 'http://localhost:8080/ticket';
    console.log(ticket);
    return this.httpClient.post(url, ticket);
  }
  achatParSolde(num_tel:string): Observable<any>{
    let url = 'http://localhost:8080/ticket/paiementParSolde';
    console.log(num_tel);
    return this.httpClient.post<Response>(url, num_tel);
  }
  confirmationAchatParSolde(code:number): Observable<any>{
    let num_tel=localStorage.getItem("num_tel");
    let user_id=localStorage.getItem("user_id");
    let url = 'http://localhost:8080/ticket/confirmationPaiementParSolde?code='+code+'&id_clt='+user_id+'&num_tel='+num_tel;
    console.log(code);
    console.log(url);
    return this.httpClient.get<Response>(url);
  }
  achatParCarte(compte:Compte): Observable<any>{
    let url = 'http://localhost:8080/ticket/paiementParCarte';
    console.log(compte);
    return this.httpClient.post<Response>(url, compte);
  }
  confirmationAchatParCarte(code:number): Observable<any>{
    let num=localStorage.getItem("num_compte");
    let user_id=localStorage.getItem("user_id");
    let url = 'http://localhost:8080/ticket/confirmationPaiementParCarte?code='+code+'&id_clt='+user_id+'&numCompte='+num;
    console.log(code);
    console.log(url);
    return this.httpClient.get<Response>(url);
  }
  paiement(compte:Compte): Observable<any>{
    let url = 'http://localhost:8080/Abonnements/paiement';
    return this.httpClient.post<Response>(url, compte);
  }
  facture(): Observable<any>{
    let user_id=localStorage.getItem("user_id");
    let url = 'http://localhost:8080/Abonnements/facture?id_clt='+user_id;
    return this.httpClient.get<Facture[]>(url);
  }
  confirmationPaiement(code:number): Observable<any>{
    let num=localStorage.getItem("num_compte");
    let codeAbonne=localStorage.getItem("codeAbonnee");
    let url = 'http://localhost:8080/Abonnements/confirmation?code='+code+'&codeAbonnee='+codeAbonne+'&numCompte='+num;
    console.log(code);
    console.log(url);
    return this.httpClient.get<Response>(url);
  }
}

