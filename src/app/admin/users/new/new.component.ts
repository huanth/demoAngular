import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

export interface User {
  username: string;
  password: string;
  email: string;
  name: string;
  phone: string;
  address: string;
  is_admin: boolean
}

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})


export class NewComponent {

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) { }

  public validateForm: boolean = false;

  user: User = {
    username: '',
    password: '',
    email: '',
    name: '',
    phone: '',
    address: '',
    is_admin: false
  };

  add_user(username: string, password: string, email: string, name: string, phone: string, address: string, is_admin: boolean) : void {
    this.validateForm = false;

    this.usernameValidator(username);
    this.passwordValidator(password);
    this.emailValidator(email);
    this.nameValidator(name);
    this.phoneValidator(phone);
    this.addressValidator(address);

    if (this.validateForm) {
      return;
    }
    else {
      this.authService.createUser(username, password, email, name, phone, address, is_admin).subscribe(response => {
        this.router.navigate(['/admin/users/lists']);
      });
    }
  }

  usernameValidator(username: string) : void {
    let usernameError: any = document.querySelector('input[name="username"]~span');
    usernameError.innerHTML = '';

    if (username.length > 20 || username == '') {
      usernameError.appendChild(document.createTextNode('Username is not valid'));
      this.validateForm = true;
    }
  }

  passwordValidator(password: string) : void {
    let passwordError: any = document.querySelector('input[name="password"]~span');
    passwordError.innerHTML = '';

    if (password.length < 8 || password == '') {
      passwordError.appendChild(document.createTextNode('Password is not valid'));  
      this.validateForm = true;
    }
  }

  emailValidator(email: string) : void {
    let emailError: any = document.querySelector('input[name="email"]~span');
    emailError.innerHTML = '';

    if (email == '') {
      emailError.appendChild(document.createTextNode('Email is not valid'));
      this.validateForm = true;
    }
  }

  nameValidator(name: string) : void {
    let nameError: any = document.querySelector('input[name="name"]~span');
    nameError.innerHTML = '';

    if (name == '' || name.length > 50) {
      nameError.appendChild(document.createTextNode('Fullname is not valid'));
      this.validateForm = true;
    }
  }

  phoneValidator(phone: string) : void {
    let phoneError: any = document.querySelector('input[name="phone"]~span');
    phoneError.innerHTML = '';

    if (phone == '' || phone.length > 10) {
      phoneError.appendChild(document.createTextNode('Phone is not valid'));
      this.validateForm = true;
    }
  }

  addressValidator(address: string) : void {
    let addressError: any = document.querySelector('input[name="address"]~span');
    addressError.innerHTML = '';

    if (address == '' || address.length > 100) {
      addressError.appendChild(document.createTextNode('Address is not valid'));
      this.validateForm = true;
    }
  }
}
