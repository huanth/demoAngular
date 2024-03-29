import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private http: HttpClient;
  private router: Router;

  private listBooks: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  private book: BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor(http: HttpClient, router: Router) { 
    this.http = http;
    this.router = router;
  }

  public url: string = 'http://localhost:1337/api/';

  getAllBooks(): Observable<any> {
    return this.http.get(this.url + 'books?populate=*').pipe( // '?populate=*'  => thêm để load url image
      tap((response: any) => {
        this.listBooks.next(response.data);
      })
    );
  }

  getBook(id: string): Observable<any> {
    return this.http.get(this.url + 'books/' + id + '?populate=*');
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(this.url + 'books/' + id);
  }

  createBook(name: string, sku: string, price: string, description: string, category: string, year: string, author: string): Observable<any> {
    return this.http.post(this.url + 'books', {
      "data": {
        name: name,
        sku: sku,
        price: price,
        description: description,
        category: category,
        year: year,
        author: author
      }
    });
  }

  public getBooksObservable(): Observable<any> {
    return this.listBooks.asObservable();
  }

  public getBookObservable(): Observable<any> {
    return this.book.asObservable();
  }

}