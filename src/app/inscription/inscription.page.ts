import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  private user;

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

  onSubmit(dataUser) {
    let url = this.auth.host + '/registerUser';
    this.auth.postRessource(url,dataUser)
        .subscribe(data=>{
          this.user = data;
          localStorage.setItem("user_id" , this.user.id );
            console.log(this.user);
        },err=>{
          console.log(err);
        })
  }
}
