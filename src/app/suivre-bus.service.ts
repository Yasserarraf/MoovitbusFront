import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SuivreBusService {


  constructor(private http: HttpClient) {}

  public host:string = "http://localhost:8080"

  public getAllstations(){
    //let url = this.host + '/station/All'
    return this.http.get("assets/stations.json");
    //return this.http.get(url);
  }

  public getAllLignes(){
    let url = this.host + '/lignes'
    //return this.http.get("assets/lignes.json");
    return this.http.get(url);
  }
  public getAllBusLocations(url){
    //return this.http.get("assets/busLocations.json");
    return this.http.get(url);
  }

  postRessource(url: any, ) {
    //return this.http.get(url);

    return this.http.get(url);
  }
}
