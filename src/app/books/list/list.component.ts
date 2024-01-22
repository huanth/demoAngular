import { Component } from '@angular/core';

import { BookService } from '../book.service';
import { CartService } from '../../cart/cart.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  
    constructor(private bookService: BookService, private cartService: CartService, private authService: AuthService) {}
  
    public books: any = [];
    currentUser: any = {};
    totalCart: number = 0;
  
    ngOnInit(): void {
      this.bookService.getAllBooks().subscribe(response => {
        this.books = response.data;
      });

      this.authService.getCurrentUser().subscribe(response => {
        this.currentUser = response.data[0].id;
      });
    }
  
    addToCart(bookID: any, price: any): void {

      var minicart = document.getElementById("minicart");
      minicart?.classList.toggle("show");

      this.cartService.getTotalCart().subscribe(() => {});
      this.cartService.getAllCarts().subscribe(() => {});

      this.cartService.getTotalCartObservable().subscribe((totalCart) => {
        this.totalCart = totalCart;
      });

      if (this.totalCart == 0) {
        this.cartService.addToCart(bookID, 1, price, this.currentUser).subscribe(() => {
          this.cartService.getTotalCart().subscribe(() => {});
        });
      }
      else {
        this.cartService.getAllCarts().subscribe((carts) => {
          var check: boolean = false;
          for (let i = 0; i < carts.data.length; i++) {
            if (carts.data[i].attributes.product.data.id == bookID) {
              check = true;

              let cartID = carts.data[i].id;
             
              this.cartService.updateCart(cartID, carts.data[i].attributes.qty + 1, (carts.data[i].attributes.qty + 1) * (carts.data[i].attributes.price) ).subscribe(() => {
                this.cartService.getTotalCart().subscribe(() => {});
              });
            }
          }
          if (!check) {
            this.cartService.addToCart(bookID, 1, price, this.currentUser).subscribe(() => {
              this.cartService.getTotalCart().subscribe(() => {});
            });
          }
        });
      }

      this.cartService.getTotalCart().subscribe(() => {});
      this.cartService.getAllCarts().subscribe(() => {});
    }
}
