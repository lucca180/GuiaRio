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

  user_name: string;

  placesArr = [];

  guidesArr = [];

  constructor(public places: PlacesService, public users: UsersService) {
    this.getPrevisao();
    this.getPlaces();
    this.getGuias();
  }


  getPlaces(){
    this.places.listPlacesWithPhoto();
    this.places.listPlaces().subscribe(res => {
      console.log(res);
      this.placesArr = res;
    })
  }

  getGuias(){
    this.users.listUsers().subscribe(res => {
      this.guidesArr = res.filter(x => x.is_guide);
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

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem("userData"));
    if(user) this.user_name = user.first_name;
  }
}
