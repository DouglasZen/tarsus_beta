import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { NavbarComponent } from './navbar/navbar.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LocalComponent } from './local/local.component';
import { ListaLocaisComponent } from './lista-locais/lista-locais.component';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';

const appRoutes: Routes = [
  { path: 'cadastro', component: CadastroComponent },
  { path: 'local', component: LocalComponent },
  { path: 'lista_locais', component: ListaLocaisComponent },
  { path: 'avaliacao', component: AvaliacaoComponent }
];

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
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [NavbarComponent]
})
export class AppModule { }