import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private http: HttpClient;
  private router: Router;

  private listCarts: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  private totalCart: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private totalCartPrice: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(http: HttpClient, router: Router) {
    this.http = http;
    this.router = router;
  }

  public url: string = 'http://localhost:1337/api/';

  getAllCarts(): Observable<any> {
    return this.http.get(this.url + 'carts?populate=*').pipe( // '?populate=*'  => thêm để load url image
      tap((response: any) => {
        this.listCarts.next(response.data);
      })
    );
  }

  getTotalCart(): Observable<number> {
    return this.http.get(this.url + 'carts').pipe(
      tap((response: any) => {

        // Total qty in cart
        let totalQty: number = 0;
        let totalCartPrice: number = 0;

        response.data.forEach((element: any) => {
          totalQty += element.attributes.qty;
          totalCartPrice += element.attributes.total_price;
        });

        this.totalCart.next(totalQty);
        this.totalCartPrice.next(totalCartPrice);
      })
    );
  }

  addToCart(bookID: any, qty: any, price: any, user: any): Observable<any> {
    return this.http.post(this.url + 'carts', {
      "data": {
        product: bookID,
        qty: qty,
        price: price,
        total_price: qty * price,
        user: user
      }
    });
  }

  updateCart(id: any, qty: any, total_price: any): Observable<any> {
    return this.http.put(this.url + 'carts/' + id, {
      "data": {
        qty: qty,
        total_price: total_price
      }
    });
  }

  public getCartsObservable(): Observable<any> {
    return this.listCarts.asObservable();
  }

  public getTotalCartObservable(): Observable<number> {
    return this.totalCart.asObservable();
  }

  public getTotalCartPriceObservable(): Observable<number> {
    return this.totalCartPrice.asObservable();
  }

}
