import { Component } from '@angular/core';
import { Pessoa } from '../model/Pessoa';
import { UsuarioService } from '../usuario.service'
import 'rxjs/add/operator/do';

import { HttpEvent } from '@angular/common/http';
import { HttpResponse } from "@angular/common/http";
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent {
  pessoa: Pessoa;
  confimaPassword: String;
  constructor(
    private usuarioService : UsuarioService,
    private router : Router
  ) {
    this.pessoa = new Pessoa();
  }

  ngOnInit() {
    let token = localStorage.getItem("currentUser");
    if(token){
      this.router.navigate(["local"]);
    }   
  }  

  public cadastrar(){
    this.usuarioService.cadastrar(this.pessoa)
                       .subscribe(
                          response => {
                            this.router.navigate(["local"]);
                          },
                          err => {
                            if(err.status == 500)
                              alert("Erro no servidor");
                          });
  }

  public focusOutFunction(){
    let email = CadastroComponent.isValid(this.pessoa.email);
    if(email){
      this.usuarioService.verificarEmail(this.pessoa.email)
                        .subscribe(
                          response  => {
                            console.log(response);
                          },
                          err => {
                            console.log(err);
                            if(err.status === 409)
                              alert("E-mail já cadastrado");
                              this.pessoa.email = '';
                            if(err.status == 500)
                              alert("Erro no servidor");
                          });
    }
    
  }

  public static isValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
}
