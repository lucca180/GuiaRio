import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( public http: HttpClient ) { }

  apiUrl: string = "http://127.0.0.1:8000/";

  httpHeaders: any = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  }

  registrarUsuario( form ): Observable<any> {
    return this.http.post( this.apiUrl + 'register', form, this.httpHeaders);
  }

}



