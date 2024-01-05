import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent {
  constructor(private authService: AuthService) {}

  public users: any = [];
  public confirmDeleteUserID: number = 0;

  ngOnInit(): void {
    this.authService.getAllUser().subscribe(response => {
      this.users = response.data;
    });
  }

  deleteUser(id: number): void {
    this.confirmDeleteUserID = id;
  }

  confirmDelete(): void {
    this.authService.deleteUser(this.confirmDeleteUserID).subscribe(response => {
       this.ngOnInit();
    });
  }
}
