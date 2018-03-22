import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CadastroComponent } from './cadastro/cadastro.component';
import { LocalComponent } from './local/local.component';
import { ListaLocaisComponent } from './lista-locais/lista-locais.component';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [
  { path: 'cadastro', component: CadastroComponent },
  { path: 'local', component: LocalComponent },
  { path: 'lista_locais', component: ListaLocaisComponent },
  { path: 'avaliacao/:codigo/:nome', component: AvaliacaoComponent},
  { path: 'index', component: NavbarComponent},
  { path: '', redirectTo: '/cadastro', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
