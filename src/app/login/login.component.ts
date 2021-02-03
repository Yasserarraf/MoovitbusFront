import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  network: any;
  netResponse: string;

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 callPostService(email,password)
 {
    let p = this.network.callPost(email,password)
        p.then(data => {
          console.log("Sent"+ JSON.stringify(data.json().data));
          this.netResponse = JSON.stringify(data.json().data);

        })
 } 

}
