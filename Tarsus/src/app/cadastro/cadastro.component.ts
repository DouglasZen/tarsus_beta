import { Component } from '@angular/core';
import { Pessoa } from '../model/Pessoa';

@Component({
  selector: 'app-root',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent {
  private pessoa: Pessoa;
  private confimaPassword: String;
  constructor() {
    this.pessoa = new Pessoa();
  }

  public cadastrar(){
    console.log(this.pessoa);
  }
}
