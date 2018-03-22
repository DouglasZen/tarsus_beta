import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Router } from '@angular/router';
import { UsuarioService } from './usuario.service'
import { Token } from './model/token';

@Injectable()
export class InterceptorService implements HttpInterceptor{
  token : Token;
  constructor( private router : Router, 
               public usuarioService : UsuarioService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>>{
    
    let usuario = localStorage.getItem("currentUser");
    let codErro;
    if(usuario){
      this.token = JSON.parse(usuario);
      const cloneReq = request.clone({
        headers: request.headers.set('Authorization', this.token.token)
      });
      return next.handle(cloneReq)
                 .do((evento: HttpEvent<any>) =>{
                    this.usuarioService.islogado = true;
                    this.usuarioService.usuario = JSON.parse(usuario);
                 })
                 .catch(resposta => {
                    if(resposta instanceof HttpErrorResponse){
                      codErro = resposta.error['statusCode'];
                      if(codErro == 401){
                        this.router.navigate(["cadastro"]);
                        localStorage.clear();
                        this.usuarioService.islogado = false;
                      }
                    }
                    return Observable.throw(resposta);
                 });
    }else{
      return next.handle(request)
                 .do((evento: HttpEvent<any>) => {
                    if(evento instanceof HttpResponse){
                      if(evento.body){
                        usuario = JSON.stringify(evento.body);
                        this.usuarioService.islogado = true;
                        this.usuarioService.usuario = JSON.parse(usuario);
                        localStorage.setItem("currentUser", usuario);  
                      }
                    }   
                 }).catch(resposta => {
                    if(resposta  instanceof HttpErrorResponse){
                      codErro = resposta.error['statusCode'];
                      if(codErro == 401){
                        this.router.navigate(["cadastro"]);
                        localStorage.clear();
                        this.usuarioService.islogado = false;
                      }
                    }
                    return Observable.throw(resposta);
                 });
    }
  }

}
