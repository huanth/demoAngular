import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router, ActivatedRoute  } from '@angular/router';

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
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  public id: string = '';

  user: User = {
    username: '',
    password: '',
    email: '',
    name: '',
    phone: '',
    address: '',
    is_admin: false
  };

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      
      this.id = params['id'];
      
      this.get_user();
    });
  }

  get_user() : void {
    this.authService.getUser(this.id).subscribe(response => {
      this.user = response.data.attributes;
    });
  }

  edit_user(username: string, password: string, email: string, name: string, phone: string, address: string) : void {
    this.authService.editUser(this.id, username, password, email, name, phone, address).subscribe(response => {
      this.router.navigate(['/admin/users/lists']);
    });
  }

}
