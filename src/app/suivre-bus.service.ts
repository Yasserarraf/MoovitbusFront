import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SuivreBusService {


  constructor(private http: HttpClient) {}

  public getAllstations(){
    return this.http.get("assets/stations.json");
  }

  public getAllLignes(){
    return this.http.get("assets/lignes.json");
  }
  public getAllBusLocations(){
    return this.http.get("assets/busLocations.json");
  }

  public getMeilleurVoyage(){
    return this.http.get("assets/meilleurChemin1.json");
  }


  postRessource(url: any, data: any) {
    return this.http.get(url);
  }
}
