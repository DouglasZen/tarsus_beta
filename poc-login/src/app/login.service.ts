import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './user';
import { Token } from './token';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


const httpOptions = {
  headers: new HttpHeaders(
    { 
      'Content-Type': 'application/json'
    })
};

@Injectable()
export class LoginService {
  token :Token;
  public url = 'http://localhost:8080/wstarsus/ws/login'

  constructor(
    private http: HttpClient
  ) { }

  login (user : User): Observable<Token>{
    return this.http.post<Token>(this.url, user, httpOptions);
  }

  teste(): Observable<any>{
    this.token = JSON.parse(localStorage.getItem("currentUser"));
    
    let hd = new HttpHeaders({'Authentication' : this.token.token});
    return this.http.get<any>(this.url, {headers: hd});
    
  }

  logout(): void{
    localStorage.removeItem('currentUser');
  }
}
