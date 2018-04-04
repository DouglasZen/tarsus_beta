import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';


import { UsuarioService } from './usuario.service';

import { NavbarComponent } from './navbar/navbar.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LocalComponent } from './local/local.component';
import { ListaLocaisComponent } from './lista-locais/lista-locais.component';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AppRoutingModule } from './/app-routing.module';
import { InterceptorService } from './interceptor.service';





@NgModule({
  declarations: [
    NavbarComponent,
    CadastroComponent,
    LocalComponent,
    ListaLocaisComponent,
    AvaliacaoComponent,
    PerfilComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UsuarioService, 
              { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}],
  bootstrap: [NavbarComponent]
})
export class AppModule { }