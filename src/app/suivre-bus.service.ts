import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuivreBusService {

  constructor(private http: HttpClient) {


   }
   id : number;
   longitude:number;
   direction:"";
   temps_Restant:number;
   latitude:number;
   configUrl = 'assets/config.json';

   getConfig() {
    return this.http.get(this.configUrl);
  }
}
