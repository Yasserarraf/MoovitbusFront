import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SuivreBusService} from '../suivre-bus.service';
import * as Leaflet from 'leaflet';
import 'leaflet-routing-machine';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor(private suivreBusService:SuivreBusService,private http:HttpClient) {

  }
  //variables
  stations;
  lignes;
  selectedStationAct;
  selectedStationDest;
  selectedLigne;
  sA;
  sD;
  isDisabled=true;
  busLocations;
  busLocationsmarkers = [];
  routeControl;
  i=0;
  map:any;



  ngOnInit() {
    this.suivreBusService.getAllstations()
        .subscribe(data=>{
          this.stations=data;
        },err=>{
          console.log(err);
        });
      this.suivreBusService.getAllLignes()
          .subscribe(data=>{
              this.lignes=data;
          },err=>{
              console.log(err);
          });
      this.suivreBusService.getAllBusLocations()
          .subscribe(data=>{
              this.busLocations=data;
          },err=>{
              console.log(err);
          });

  }

    ionViewDidEnter(){
        this.loadMap();
    }

    loadMap(){
        this.map = Leaflet.map("mapId").setView([35.73793, -5.88322], 13);
        Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            { attribution: 'MoovitBus © 2021 / 2022 '})
                    .addTo(this.map); // This line is added to add the Tile Layer to our map
    }
    //get lat lng of selected value from stations.json
    getlatlgStations(stationAct,stationDes){


      this.stations.forEach((val:any)=>{


        if(stationAct === val.nom){
            this.sA = {"lat":val.x_station,"lng":val.y_station};
        }else if(stationDes === val.nom)
            this.sD = {"lat":val.x_station,"lng":val.y_station};
      });
    }
  //locate the selected value in the map
    locateSelectedValue(){
      //locate bus positions
        if(this.busLocationsmarkers.length > 0){

            console.log(this.busLocationsmarkers);
            this.busLocationsmarkers.forEach(val=>{
                this.map.removeLayer(val);

            });
            this.busLocationsmarkers = [];
        }
        this.busLocations.forEach(val=>{
            console.log(val.longitude);
            let Marker = Leaflet.marker([val.latitude,  val.longitude ]);
            var popup = Leaflet.popup({ minWidth:30,maxWidth:30, autoClose: false, closeOnClick: false,})
                .setContent(val.temps_Restant+" min");
            Marker.addTo(this.map);
            Marker.bindPopup(popup).openPopup();


            this.busLocationsmarkers.push(Marker);
        });



      //locate selected values
      this.getlatlgStations(this.selectedStationAct,this.selectedStationDest);
        if(this.routeControl){
            console.log("it works");
            this.map.removeControl(this.routeControl);
        }
        this.routeControl =  Leaflet.Routing.control({

        router: Leaflet.Routing.osrmv1({
            serviceUrl: `http://router.project-osrm.org/route/v1/`
        }),
            showAlternatives: true,

        fitSelectedRoutes: false,

            show: false,

            routeWhileDragging: false,

            waypoints: [
                Leaflet.latLng(this.sA.lat,this.sA.lng),
                Leaflet.latLng(this.sD.lat,this.sD.lng)
        ],
        }).addTo(this.map);

    }


}
