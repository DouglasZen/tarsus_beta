import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';


import { UsuarioService } from './usuario.service';

import { NavbarComponent } from './navbar/navbar.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LocalComponent } from './local/local.component';
import { ListaLocaisComponent } from './lista-locais/lista-locais.component';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
import { AppRoutingModule } from './/app-routing.module';




@NgModule({
  declarations: [
    NavbarComponent,
    CadastroComponent,
    LocalComponent,
    ListaLocaisComponent,
    AvaliacaoComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UsuarioService],
  bootstrap: [NavbarComponent]
})
export class AppModule { }