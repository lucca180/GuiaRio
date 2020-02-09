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
}
