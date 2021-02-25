import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public host:string = "http://localhost:8080";

  postRessource(url,data){
    //return this.http.get("assets/user.json");
     return this.http.post(url,data);
  }

}
