import { Component, OnInit, Input, Output } from '@angular/core';
import { User } from '../user';
import { Token } from '../token';

import { LoginService } from '../login.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user : User = {
    usuario:'',
    password:''
  }
  token : Token;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  public url = 'http://localhost:8080/wstarsus/ws/login'

  ngOnInit() {
  }

  logar(): void{
    this.loginService.login(this.user)
        .subscribe(token => {
          if(token){
            this.token = token;
            console.log(this.token);
            localStorage.setItem("currentUser", JSON.stringify(this.token));
            this.router.navigate(['home']);
          }
        });
    
  } 
}
