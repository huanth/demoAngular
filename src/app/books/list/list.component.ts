import { Component } from '@angular/core';

import { BookService } from '../book.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  
    constructor(private bookService: BookService) { }
  
    public books: any = [];
  
    ngOnInit(): void {
      this.bookService.getAllBooks().subscribe(response => {
        this.books = response.data;
  
        console.log(this.books);
      });
    }
  
    addToCart(book: any): void {
      console.log(book);
    }
}
