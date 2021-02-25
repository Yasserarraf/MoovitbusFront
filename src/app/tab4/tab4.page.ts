import { Component, OnInit } from '@angular/core';
import {SuivreBusService} from '../suivre-bus.service';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {


  constructor(private suivreBusService:SuivreBusService) { }
  stations;

  result: any;


  station_Dep;
  station_Dist;
  ngOnInit() {
    this.suivreBusService.getAllstations()
        .subscribe(data=>{
          this.stations=data;
        },err=>{
          console.log(err);
        });

  }

  submitForm(data) {
      //let url = this.suivreBusService.host + '/meilleurVoyage';
      let url;
      if(data.station_Dep === "Bni Makada"&& data.station_Dist === "Cite Universitaire" ) {
        url = "assets/meilleurChemin1.json";
      }else if(data.station_Dep === "Hawmat Chouk"&& data.station_Dist === "Msnana"){
        url = "assets/meilleurChemin2.json";
      }

      this.suivreBusService.postRessource(url,data)
          .subscribe(data=>{
            this.result= data;
            console.log(this.result.length);
          });
    }
}
