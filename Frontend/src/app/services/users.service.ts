import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiURL: string = 'http://localhost:8000/api/';
  
  constructor(public http: HttpClient) { }

  listUsers():Observable<any> {
    return this.http.get(this.apiURL+'listUser');
  }

  getUser(id):Observable<any> {
    return this.http.get(this.apiURL+'showUser/'+id);
  }

  updateUser(id, values):Observable<any> {
    return this.http.post(this.apiURL+'updateUser/'+id, values);
  }

  getRatings(id):Observable<any> {
    return this.http.get(this.apiURL+"ratingsUser/"+id);
  }

  createComment(values, idUser):Observable<any> {
    return this.http.post( this.apiURL + 'createRating/' + idUser, values);
  }

  getFavorites(id):Observable<any> {
    return this.http.get(this.apiURL+"favorites/"+id);
  }

  addFavorite(userId, placeId):Observable<any> {
    return this.http.post(this.apiURL+"createFavorite/"+userId, {place_id: placeId});
  }

  removeFavorite(userId, placeId):Observable<any> {
    return this.http.post(this.apiURL+"deleteFavorite/"+userId, {place_id: placeId});
  }
}
