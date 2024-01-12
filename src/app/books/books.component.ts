import { Component } from '@angular/core';

import { BookService } from './book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {

  constructor(private bookService: BookService) { }

  public books: any = [];

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(response => {
      this.books = response.data;

      console.log(this.books);
    });
  }

}
