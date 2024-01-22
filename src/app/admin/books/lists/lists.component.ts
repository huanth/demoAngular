import { Component } from '@angular/core';
import { BookService } from 'src/app/books/book.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})

export class ListsComponent {
  constructor(private bookService: BookService) {}

  public books: any = [];
  public confirmDeleteBookID: number = 0;

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(response => {
      this.books = response.data;
    });
  }

  deleteBook(id: number): void {
    this.confirmDeleteBookID = id;
  }

  confirmDelete(): void {
    this.bookService.deleteBook(this.confirmDeleteBookID).subscribe(response => {
       this.ngOnInit();
    });
  }
}
