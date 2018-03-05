import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
    var ls = localStorage.getItem("currentUser");
    if(null == ls){
      this.router.navigate(['login']);
    }
    
  }

  logout() :void{
    this.loginService.logout();
    this.router.navigate(['login']);
      
  }

  teste() :void{
    this.loginService.teste().subscribe();
  }

}
