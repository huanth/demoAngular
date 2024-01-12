import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  userLogin = {
    username: '',
    password: ''
  };
  
  passwordPattern = /^[a-z0-9_-]{8,32}$/i;
  usernamePattern = /^[a-z]{3,20}$/i;


  constructor(private authService: AuthService, private router: Router) {}

  login(username: string, password: string): void {
    this.authService.login(username, password).subscribe(response => {
      if (response.data.length > 0) {
        this.router.navigate(['/']);
      }
      else {
        alert('Invalid username or password');
      }
    });
  }
  
  onSubmit(form: NgForm): void {
    this.login(this.userLogin.username, this.userLogin.password);
  }
}
