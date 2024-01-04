import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
password: string = '';
username: string = '';
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
}
