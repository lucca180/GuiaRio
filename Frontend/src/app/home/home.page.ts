import { Component } from '@angular/core';
import { faTree, faPizzaSlice, faUmbrellaBeach, faTheaterMasks, faCloudSun, faCloudRain, faSmog, faSun, faMoon, faCloud, faCloudMoon, faTemperatureHigh, faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons';
import { PlacesService } from '../services/places.service';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  faTree = faTree;
  faPizzaSlice = faPizzaSlice;
  faUmbrellaBeach = faUmbrellaBeach;
  faTheaterMasks = faTheaterMasks;

  weather = {
    description: "Provavelmente Quente",
    temp: 39,
    icon: faCloudSun,
  }

  placesArr = [
    {
      name: 'Corcovado',
      photo: "https://i1.wp.com/diariodoturismo.com.br/wp-content/uploads/2016/01/Corcovado_1_16.jpeg"
    },
    {
      name: 'Pão de Açúcar',
      photo: "https://cdn.panrotas.com.br/portal-panrotas-statics/media-files-cache/276055/26377319a8e9918ecf72cd4180f95514opcao1rev2cmyk/0,73,1280,764/670,400,0.42/0/default.jpg"
    },
    {
      name: 'Praia de Copacabana',
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxuk2tOOYf2B3lKTmTkbz6G1La0k1rnDGUDbJIM5_uCjJ1PP_3"
    },
    {
      name: 'Maracanã',
      photo: "https://ogimg.infoglobo.com.br/esportes/23531377-67c-b11/FT1086A/652/xMARACA.jpg.pagespeed.ic.AcpV3u1EPq.jpg"
    },
  ];

  guidesArr = [];

  constructor(public places: PlacesService, public users: UsersService) {
    this.getPrevisao();
    this.getPlaces();
    this.getGuias();
  }


  getPlaces(){
    this.places.listPlaces().subscribe(res => {
      this.placesArr = res[0];
    })
  }

  getGuias(){
    this.users.listUsers().subscribe(res => {
      this.guidesArr = res[0];
      console.log(res[0])
    });
  }

  async getPrevisao (){
    try{
      const URL = "https://api.hgbrasil.com/weather?format=json-cors&key=0c236389&woeid=90200707";
      let res = await fetch(URL);
      let data = await res.json();
      let weather = data.results;
      this.weather.description = weather.description;
      this.weather.temp = weather.temp;

      switch(weather.condition_slug){
        case 'storm':
          this.weather.icon = faCloudShowersHeavy;
          break;
        case 'rain':
          this.weather.icon = faCloudRain;
          break;
        case 'fog':
          this.weather.icon = faSmog;
          break;
        case 'clear_day':
          this.weather.icon = faSun;
          break;
        case 'clear_night':
          this.weather.icon = faMoon;
          break;
        case 'cloud':
          this.weather.icon = faCloud;
          break;
        case 'cloudly_day':
          this.weather.icon = faCloudSun;
          break;
        case 'cloudly_night':
          this.weather.icon = faCloudMoon;
          break;
        default:
          this.weather.icon = faTemperatureHigh;
          break;
      }
    }catch(e){
      console.error(e);
    }
  }

}