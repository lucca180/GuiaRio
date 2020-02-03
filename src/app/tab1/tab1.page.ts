import { Component } from '@angular/core';
import { faTree, faPizzaSlice, faUmbrellaBeach, faTheaterMasks, faCloudSun, faBolt, faCloudRain, faSmog, faSun, faMoon, faCloud, faCloudMoon, faTemperatureHigh } from '@fortawesome/free-solid-svg-icons';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  faTree = faTree;
  faPizzaSlice = faPizzaSlice;
  faUmbrellaBeach = faUmbrellaBeach;
  faTheaterMasks = faTheaterMasks;

  weather = {
    description: "Provavelmente Quente",
    temp: 39,
    icon: faCloudSun,
  }

  places = [
    {
      name: 'Corcovado',
      img: "https://i1.wp.com/diariodoturismo.com.br/wp-content/uploads/2016/01/Corcovado_1_16.jpeg"
    },
    {
      name: 'Pão de Açúcar',
      img: "https://cdn.panrotas.com.br/portal-panrotas-statics/media-files-cache/276055/26377319a8e9918ecf72cd4180f95514opcao1rev2cmyk/0,73,1280,764/670,400,0.42/0/default.jpg"
    },
    {
      name: 'Praia de Copacabana',
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxuk2tOOYf2B3lKTmTkbz6G1La0k1rnDGUDbJIM5_uCjJ1PP_3"
    },
    {
      name: 'Maracanã',
      img: "https://ogimg.infoglobo.com.br/esportes/23531377-67c-b11/FT1086A/652/xMARACA.jpg.pagespeed.ic.AcpV3u1EPq.jpg"
    },

  ]

  constructor() {
    this.getPrevisao();
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
          this.weather.icon = faBolt;
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
