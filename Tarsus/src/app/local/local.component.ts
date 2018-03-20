import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UriSettings } from '../config/uri';
import { Locais } from '../model/locais';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {
  locais : Locais;
  coordenada : string;
  location = {};
  setPosition(position){
    this.location = position.coords;
    this.listarLocais();
  }

  constructor(
    private http: HttpClient,
    private router : Router
  ) { }

  ngOnInit() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
    }
    
  }

  public listarLocais(){
    this.coordenada =this.location["latitude"] + ',' + this.location["longitude"]; 
    let coord = this.location["latitude"] + ',' + this.location["longitude"];
    this.http.get(UriSettings.URI + 'locais/' + coord)
             .subscribe(
               data => {
                 this.locais = data['results']; 
               });
  }
}
