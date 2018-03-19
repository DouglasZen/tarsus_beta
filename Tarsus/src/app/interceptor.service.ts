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


@Injectable()
export class InterceptorService implements HttpInterceptor{
  
  constructor( private router : Router) { }
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
                    console.log(evento) ;
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
                        token = evento.body['token'];
                        localStorage.setItem("currentUser", token);  
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
