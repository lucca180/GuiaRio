import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  apiURL: string = 'localhost:8000/api/';
  
  constructor(public http: HttpClient) { }

  getPlaces():Observable<any> {
    return this.http.get(this.apiURL+'showPlace/0');
  }
  
}
