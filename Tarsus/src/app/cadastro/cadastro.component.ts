import { Component } from '@angular/core';
import { Pessoa } from '../model/Pessoa';
import { UsuarioService } from '../usuario.service'


@Component({
  selector: 'app-root',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent {
  private pessoa: Pessoa;
  private confimaPassword: String;
  constructor(
    private usuarioService : UsuarioService
  ) {
    this.pessoa = new Pessoa();
  }

  public cadastrar(): void{
    this.usuarioService.cadastrar(this.pessoa).subscribe(res =>{
      console.log(res);
    });
  }
}
