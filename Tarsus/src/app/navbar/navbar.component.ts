import { Component } from '@angular/core';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Login } from '../model/login';

@Component({
  selector: 'app-root',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  private login: Login;
  constructor(private router: Router) {
    this.login = new Login();
  }

  ngOnInit() {
    this.router.navigate(['/cadastro']);
  }
}
