import { Component } from '@angular/core';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Login } from '../model/login';
import { Token } from '../model/token';
import { UsuarioService } from '../usuario.service';
import { Erro } from '../model/erro';

@Component({
  selector: 'app-root',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  login: Login;
  logado: Boolean;

  
  constructor(
    public usuarioService : UsuarioService
  ) {
    this.login = new Login();
  }

  ngOnInit() {
    /*let token = localStorage.getItem("currentUser");
    if(token){
      this.logado = true;
      console.log(this.logado);
    } else{
      this.logado = false;
      console.log(this.logado);
    }*/

  }

  public entrar(): void{
    this.usuarioService.entrar(this.login);
    this.login = new Login();
  }
}
