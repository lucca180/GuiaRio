import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiURL: string = 'http://localhost:8000/api/';
  
  httpHeaders: any = {
    headers: {
      //'Content-Type': 'multipart/form-data',
      //'Accept': 'application/json',
    }
  }

  constructor(public http: HttpClient) { }

  listUsers():Observable<any> {
    return this.http.get(this.apiURL+'listUser');
  }

  getUser(id):Observable<any> {
    return this.http.get(this.apiURL+'showUser/'+id);
  }

  updateUser(id, values):Observable<any> {
    return this.http.put(this.apiURL+'updateUser/'+id, values, this.httpHeaders);
  }
}
