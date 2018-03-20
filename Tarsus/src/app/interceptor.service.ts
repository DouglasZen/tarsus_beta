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


@Injectable()
export class InterceptorService implements HttpInterceptor{
  
  constructor( private router : Router, public usuarioService : UsuarioService) { }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>>{
    let token = localStorage.getItem("currentUser");
    let codErro;
    if(token){
      const cloneReq = request.clone({
        headers: request.headers.set('Authorization', token)
      });
      return next.handle(cloneReq)
                 .do((evento: HttpEvent<any>) =>{
                    console.log(evento);
                    this.usuarioService.islogado = true;
                 })
                 .catch(resposta => {
                    if(resposta instanceof HttpErrorResponse){
                      codErro = resposta.error['statusCode'];
                      if(codErro == 401){
                        this.router.navigate(["cadastro"]);
                        localStorage.clear();
                      }
                    }
                    return Observable.throw(resposta);
                 });
    }else{
      return next.handle(request)
                 .do((evento: HttpEvent<any>) => {
                    if(evento instanceof HttpResponse){
                      if(evento.body){
                        console.log(evento.body);
                        token = evento.body['token'];
                        this.usuarioService.islogado = true;
                        localStorage.setItem("currentUser", token);  
                        localStorage.setItem("nome", evento.body["nome"]);
                        localStorage.setItem("email", evento.body["email"]);
                        localStorage.setItem("sexo", evento.body["sexo"]);
                      }
                    }   
                 }).catch(resposta => {
                    if(resposta  instanceof HttpErrorResponse){
                      codErro = resposta.error['statusCode'];
                      if(codErro == 401){
                        this.router.navigate(["cadastro"]);
                        localStorage.clear();
                      }
                    }
                    return Observable.throw(resposta);
                 });
    }
  }

}
