import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { CartService } from './cart/cart.service';
import { checkLogin, checkAdmin, getName } from './auth/authUtils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor (private authService: AuthService, private cartService: CartService) {}
  title = 'angular';
  
  isLogin : boolean = checkLogin();
  isAdmin : boolean = checkAdmin();
  name : string = getName();

  totalProduct : number = 0;
  totalCartPrice : number = 0;
  allCart : any = [];

  ngOnInit() {
    this.authService.ísLoggedInObservable().subscribe((isLoggedIn) => {
      this.isLogin = isLoggedIn;
    });
    this.authService.isAdminObservable().subscribe((isAdmin) => {
      this.isAdmin = isAdmin;
    });
    this.authService.nameObservable().subscribe((name) => {
      this.name = name;
    });

    this.cartService.getTotalCart().subscribe(() => {});
    this.cartService.getAllCarts().subscribe(() => {});

    this.cartService.getTotalCartObservable().subscribe((totalCart) => {
      this.totalProduct = totalCart;
    });

    this.cartService.getTotalCartPriceObservable().subscribe((price) => {
      this.totalCartPrice = price;
    });

    this.cartService.getCartsObservable().subscribe((carts) => {
      this.allCart = carts;
    });

    // this.cartService.getAllCarts().subscribe((carts) => {
    //   this.allCart = carts.data;
    // });


    this.documentClick();
  }

  logout() {
    this.authService.logout();
  }


  show_minicart() {
    var minicart = document.getElementById("minicart");
    minicart?.classList.toggle("show");
  }

  // Check document click
  documentClick() {
    document.addEventListener('click', function(event) {
      var minicart = document.getElementById("minicart");
      var minicart_content = document.querySelector("#minicart_content");
      var e1 = document.querySelector(".product-item");
      console.log(minicart?.classList.contains("show"));

      if (event.target == e1) {
        // minicart?.classList.remove("show");
      }

      
    });
  }
}
