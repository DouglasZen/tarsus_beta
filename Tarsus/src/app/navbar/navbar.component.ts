import { Component } from '@angular/core';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Login } from '../model/login';
import { Token } from '../model/token';
import { UsuarioService } from '../usuario.service';
import { Erro } from '../model/erro';
import { Mensagem} from '../model/Mensagem';

@Component({
  selector: 'app-root',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  login: Login;
  logado: Boolean;
  mensagem: Mensagem;
  
  
  constructor(
    public usuarioService : UsuarioService
  ) {
    this.login = new Login();
    this.mensagem = new Mensagem();
  }

  ngOnInit() {
    
  }

  public entrar(): void{
    this.usuarioService.entrar(this.login);
    this.login = new Login();
  }

  public showModal(mensagem: Mensagem): void{
    this.mensagem.classType = 'ERRO';
    this.mensagem.tipo = 'Erro - mensagem de erro';
    this.mensagem.texto = 'Teste de mensagem de alerta para erro';
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
  }
  public closeModal(): void{
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
  }
}
