import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pessoa } from './model/Pessoa';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders(
    { 
      'Content-Type': 'application/json'
    })
};
@Injectable()
export class UsuarioService {

  public url = 'http://localhost:8080/wstarsus/ws/'

  constructor(
    private http: HttpClient
  ) { }

  cadastrar(pessoa : Pessoa) : Observable<any>{
    return this.http.post<any>(this.url + 'usuario', pessoa, httpOptions);
  }
}
