import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SuivreBusService {


  constructor(private http: HttpClient) {}

  public host:string = "http://localhost:8080"

  public getAllstations(){
    let url = this.host + '/stations'
    return this.http.get("assets/stations.json");
    //return this.http.get(url);
  }

  public getAllLignes(){
    let url = this.host + '/lignes'
    return this.http.get("assets/lignes.json");
    //return this.http.get(url);
  }
  public getAllBusLocations(url,data){
    return this.http.get("assets/busLocations.json");
    //return this.http.post(url,data);
  }

  postRessource(url: any, data: any) {
    return this.http.get(url);
    //return this.http.post(url,data);
  }
}
