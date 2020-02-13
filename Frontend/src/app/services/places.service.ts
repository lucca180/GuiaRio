import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PlacesService {

  apiURL: string = 'http://localhost:8000/api/';
  
  constructor(public http: HttpClient) { }

  listPlaces():Observable<any> {
    return this.http.get(this.apiURL+'listPlace');
  }

  getPlace(id):Observable<any> {
    return this.http.get(this.apiURL+'showPlace/'+id);
  }
}
