import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pessoa } from './model/Pessoa';
import { Observable } from 'rxjs/Observable';
import { Login } from './model/login';
import { Token } from './model/token';
import { Erro } from './model/erro';
import { catchError } from 'rxjs/operators';
import "rxjs/add/operator/catch"
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { UriSettings } from './config/uri';

const httpOptions = {
  headers: new HttpHeaders(
    { 
      'Content-Type': 'application/json'
    })
};
@Injectable()
export class UsuarioService {

  public url = UriSettings.URI;
  public usuario: Token;
  public islogado: boolean;
  
  constructor(
    private http: HttpClient,
    private router : Router
  ) {
      this.islogado = false
    }

  
  entrar(login : Login){
    this.http.post<Token>(this.url + 'login/', login)
      .subscribe(
        token => {
          if(token){
            this.router.navigate(["local"]);
          }
        }  
      );
    
  }

 
  cadastrar(pessoa : Pessoa){
    return this.http.post<any>(this.url + 'usuario', pessoa, {observe: 'response'});
  }

  verificarEmail(email : String){
    return this.http.post<String>(this.url + 'usuario/email', email, {observe: 'response'});
  }
}
