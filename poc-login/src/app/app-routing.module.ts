import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component'
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const rotas : Routes = [
  { path : 'login', component : LoginComponent},
  { path : 'home', component : HomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(rotas)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
