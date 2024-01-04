import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { checkLogin, checkAdmin, getName } from './authUtils';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http: HttpClient;
  private router: Router;

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private isAdmin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private name: BehaviorSubject<string> = new BehaviorSubject<string>('Guest');

  constructor(http: HttpClient, router: Router) { 
    this.http = http;
    this.router = router;

    this.loggedIn.next(checkLogin());
    this.isAdmin.next(checkAdmin());
    this.name.next(getName());
  }

  login(username: string, password: string): Observable<any> {
    // Replace with the actual API endpoint
    const url = 'http://localhost:1337/api/';
    
    return this.http.get(url + 'members?filters[username][$in]=' + username).pipe(
      tap((response: any) => {
        if (response.data.length > 0) {
          localStorage.setItem('key_login', response.data[0].attributes.key);
          localStorage.setItem('name', response.data[0].attributes.name);
          this.loggedIn.next(true);
          this.name.next(response.data[0].attributes.name);
          // Check user is admin
          if (response.data[0].attributes.is_admin) {
            localStorage.setItem('is_admin', 'true');
            this.isAdmin.next(true);
          }
          else {
            localStorage.removeItem('is_admin');
            this.isAdmin.next(false);
          }
        }
        else {
          this.loggedIn.next(false);
          this.isAdmin.next(false);
          this.name.next('Guest');
        }
      })
    );
  }

  public logout(): void {
    localStorage.removeItem('key_login');
    localStorage.removeItem('is_admin');
    localStorage.setItem('name', 'Guest');

    this.loggedIn.next(false);
    this.isAdmin.next(false);
    this.name.next('Guest');

    this.router.navigate(['/login']);
  }

  public ísLoggedInObservable(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  public isAdminObservable(): Observable<boolean> {
    return this.isAdmin.asObservable();
  }

  public nameObservable(): Observable<string> {
    return this.name.asObservable();
  }

}