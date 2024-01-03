import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    // Replace with the actual API endpoint
    const url = 'http://localhost:1337/api/';

    return this.http.get(url + 'members?filters[username][$in]=' + username).pipe(
      tap((response: any) => {
        console.log(response);
        if (response.data.length > 0) {
          localStorage.setItem('key_login', response.data[0].attributes.key);
        }
      })
    );
  }
}