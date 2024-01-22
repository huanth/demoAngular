import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/books/book.service';
import { AuthService } from 'src/app/auth/auth.service';

export interface Book {
  name: string;
  sku: string;
  price: string;
  description: string;
  category: string;
  year: string;
  danhgia: string | null;
  author: string;
}

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent {
  constructor(private http: HttpClient, private bookService: BookService, private router: Router, private authService: AuthService) {}

  public validateForm: boolean = false;

  currentUser: any = {};

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(response => {
      this.currentUser = response.data[0].id;
    });
  }

  book: Book = {
    name: '',
    sku: '',
    price: '',
    description: '',
    category: '',
    year: '',
    danhgia: null,
    author: '1'
  };

  add_book(name: string, sku: string, price: string, description: string, category: string, year: string, author: string) : void {
    this.validateForm = false;

    this.nameValidator(name);
    this.skuValidator(sku);
    this.priceValidator(price);
    this.descriptionValidator(description);
    this.categoryValidator(category);
    this.yearValidator(year);
    this.authorValidator(author);
    
    if (this.validateForm) {
      return;
    }
    else {
      this.bookService.createBook(name, sku, price, description, category, year, author).subscribe(response => {
        this.router.navigate(['/admin/books/list']);
      });
    }
  }

  nameValidator(name: string) : void {
    let nameError: any = document.querySelector('input[name="name"]~span');
    nameError.innerHTML = '';

    if (name == '') {
      nameError.innerHTML = 'Name is required';
      this.validateForm = true;
    }
  }

  skuValidator(sku: string) : void {
    let skuError: any = document.querySelector('input[name="sku"]~span');
    skuError.innerHTML = '';

    if (sku == '') {
      skuError.innerHTML = 'SKU is required';
      this.validateForm = true;
    }
  }

  priceValidator(price: string) : void {
    let priceError: any = document.querySelector('input[name="price"]~span');
    priceError.innerHTML = '';

    if (price == '') {
      priceError.innerHTML = 'Price is required';
      this.validateForm = true;
    }
  }

  descriptionValidator(description: string) : void {
    let descriptionError: any = document.querySelector('input[name="description"]~span');
    descriptionError.innerHTML = '';

    if (description == '') {
      descriptionError.innerHTML = 'Description is required';
      this.validateForm = true;
    }
  }

  categoryValidator(category: string) : void {
    let categoryError: any = document.querySelector('input[name="category"]~span');
    categoryError.innerHTML = '';

    if (category == '') {
      categoryError.innerHTML = 'Category is required';
      this.validateForm = true;
    }
  }

  yearValidator(year: string) : void {
    let yearError: any = document.querySelector('input[name="year"]~span');
    yearError.innerHTML = '';

    if (year == '') {
      yearError.innerHTML = 'Year is required';
      this.validateForm = true;
    }
  }

  authorValidator(author: string) : void {
    if (author == '') {
      this.validateForm = true;
    }
  } 
}
