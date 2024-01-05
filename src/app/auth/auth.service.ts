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

  private listUser: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  private user: BehaviorSubject<any> = new BehaviorSubject<any>({});

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

  getAllUser(): Observable<any> {
    const url = 'http://localhost:1337/api/';

    return this.http.get(url + 'members').pipe(
      tap((response: any) => {
        this.listUser.next(response.data);
      })
    );
  }

  getUser(id: string): Observable<any> {
    const url = 'http://localhost:1337/api/';

    return this.http.get(url + 'members/' + id).pipe(
      tap((response: any) => {
        this.user.next(response.data.attributes);
      })
    );
  }

  editUser(id: string, username: string, password: string, email: string, name: string, phone: string, address: string): Observable<any> {
    const url = 'http://localhost:1337/api/';

    return this.http.put(url + 'members/' + id, {
      "data": {
        username: username,
        password: password,
        email: email,
        name: name,
        phone: phone,
        address: address,
      }
    });
  }

  createUser(username: string, password: string, email: string, name: string, phone: string, address: string, is_admin: boolean): Observable<any> {
    const url = 'http://localhost:1337/api/';

    return this.http.post(url + 'members', {
      "data": {
        username: username,
        password: password,
        email: email,
        name: name,
        phone: phone,
        address: address,
        is_admin: is_admin,
        key_login:  Date.now().toString()
      }
    });
  }



  deleteUser(id: number): Observable<any> {
    const url = 'http://localhost:1337/api/';

    return this.http.delete(url + 'members/' + id);
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

  public listUserObservable(): Observable<any> {
    return this.listUser.asObservable();
  }

  public userObservable(): Observable<any> {
    return this.user.asObservable();
  }

}