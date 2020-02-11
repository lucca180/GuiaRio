import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PlacesService {

  apiURL: string = 'http://localhost:8000/api/';

  httpHeaders: any = {
    'accept': 'application/json',
  }
  
  constructor(public http: HttpClient) { }

  listPlaces():Observable<any> {
    return this.http.get(this.apiURL+'listPlace');
  }

  async listPlacesWithPhoto(){
    try{
      let res:any = await this.http.get(this.apiURL+'listPlace').toPromise();
      
      for(let place of res){
        place.photo = await this.http.get(this.apiURL+'showPlacePhoto/'+place.id).toPromise();
      }

      console.log(res);
      return res;
    }catch(e){
      console.error(e);
    }
  }

  getPlace(id):Observable<any> {
    return this.http.get(this.apiURL+'showPlace/'+id);
  }
  favoritePlace(id):Observable<any> { 
    return this.http.post(this.apiURL + 'createFavorite/'+id, this.httpHeaders);
  }

  
}
