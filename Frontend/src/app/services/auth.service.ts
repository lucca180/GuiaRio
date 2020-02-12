import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( public http: HttpClient ) { }

  apiUrl: string = "http://localhost:8000/api/";

  /*
  httpHeaders: any = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer '
    }
  }*/

  register( data ): Observable<any> {
    return this.http.post( this.apiUrl + 'register', data);
  }
  
  login( data ): Observable<any> {
    return this.http.post( this.apiUrl + 'login', data);
  }


  logout(token): Observable<any>{
    let headers: any = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    }

    return this.http.post(this.apiUrl + 'logout', null, headers);
  }
}



