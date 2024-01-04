import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { checkLogin, checkAdmin, getName } from './auth/authUtils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor (private authService: AuthService) {}

  title = 'angular';
  
  isLogin : boolean = checkLogin();
  isAdmin : boolean = checkAdmin();
  name : string = getName();

  ngOnInit() {
    this.authService.ísLoggedInObservable().subscribe((isLoggedIn) => {
      this.isLogin = isLoggedIn;
    });
    this.authService.isAdminObservable().subscribe((isAdmin) => {
      this.isAdmin = isAdmin;
    });
    this.authService.nameObservable().subscribe((name) => {
      this.name = name;
    });
  }

  logout() {
    this.authService.logout();
  }
}
