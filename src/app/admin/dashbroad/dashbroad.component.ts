import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { checkAdmin } from '../../auth/authUtils';
@Component({
  selector: 'app-dashbroad',
  templateUrl: './dashbroad.component.html',
  styleUrls: ['./dashbroad.component.scss']
})
export class DashbroadComponent {

  constructor (private authService: AuthService) {}

  isAdmin : boolean = checkAdmin() || false;

  ngOnInit() {
    this.authService.isAdminObservable().subscribe((isAdmin) => {
      this.isAdmin = isAdmin;
    });
  }

}
