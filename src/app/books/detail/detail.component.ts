import { Component } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { BookService } from '../book.service';
import { CartService } from '../../cart/cart.service';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  constructor(private bookService: BookService, private router: Router, private route: ActivatedRoute, private cartService: CartService, private authService: AuthService) {}

  public id: string = '';
  currentUser: any = {};
  totalCart: number = 0;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      
      this.id = params['id'];

      this.getBook();

      this.authService.getCurrentUser().subscribe(response => {
        this.currentUser = response.data[0].id;
      });
      
    });
  }

  book: any = {
    name: '',
    description: '',
    price: '',
    image: '',
    category: ''
  };

  getBook() : void {
    this.bookService.getBook(this.id).subscribe(response => {
      this.book = response.data.attributes;
    });
  }

  addToCart(price: any): void {

      var minicart = document.getElementById("minicart");
      minicart?.classList.toggle("show");

      this.cartService.getTotalCart().subscribe(() => {});
      this.cartService.getAllCarts().subscribe(() => {});

      this.cartService.getTotalCartObservable().subscribe((totalCart) => {
        this.totalCart = totalCart;
      });

      if (this.totalCart == 0) {
        this.cartService.addToCart(this.id, 1, price, this.currentUser).subscribe(() => {
          this.cartService.getTotalCart().subscribe(() => {});
        });
      }
      else {
        this.cartService.getAllCarts().subscribe((carts) => {
          var check: boolean = false;
          for (let i = 0; i < carts.data.length; i++) {
            if (carts.data[i].attributes.product.data.id == this.id) {
              check = true;

              let cartID = carts.data[i].id;
             
              this.cartService.updateCart(cartID, carts.data[i].attributes.qty + 1, (carts.data[i].attributes.qty + 1) * (carts.data[i].attributes.price) ).subscribe(() => {
                this.cartService.getTotalCart().subscribe(() => {});
              });
            }
          }
          if (!check) {
            this.cartService.addToCart(this.id, 1, price, this.currentUser).subscribe(() => {
              this.cartService.getTotalCart().subscribe(() => {});
            });
          }
        });
      }

      this.cartService.getTotalCart().subscribe(() => {});
      this.cartService.getAllCarts().subscribe(() => {});
    }
}
