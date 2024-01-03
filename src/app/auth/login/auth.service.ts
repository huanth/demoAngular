import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    // Replace with the actual API endpoint
    const url = 'http://localhost:1337/api/members';

    return this.http.post<boolean>(url, { username, password }).pipe(
      tap(success => {
        this.isLoggedIn = success;
      })
    );
  }

  getLoginStatus(): boolean {
    return this.isLoggedIn;
  }
}