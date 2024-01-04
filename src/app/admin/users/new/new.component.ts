import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

export interface User {
  username: string;
  password: string;
  email: string;
  fullname: string;
  phone: string;
  address: string;
  role: number
}

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})


export class NewComponent {

  constructor(private http: HttpClient) {}

  public validateForm: boolean = false;

  user: User = {
    username: '',
    password: '',
    email: '',
    fullname: '',
    phone: '',
    address: '',
    role: 0
  };

  add_user(username: string, password: string, email: string, fullname: string, phone: string, address: string, role: number) : void {
    this.usernameValidator(username);
  }

  usernameValidator(username: string) : void {
    if (username.length < 20 || username == '') {
      let usernameError: any = document.querySelector('input[name="username"]~span');
      usernameError.appendChild(document.createTextNode('Username is not valid'));
      
      this.validateForm = true;
    }
  }
}
