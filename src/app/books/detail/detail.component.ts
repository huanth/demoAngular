import { Component } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { BookService } from '../book.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  constructor(private bookService: BookService, private router: Router, private route: ActivatedRoute) { }

  public id: string = '';

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      
      this.id = params['id'];

      this.getBook();
      
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
      console.log(response);
      this.book = response.data.attributes;
    });
  }

  addToCart(book: any): void {
    
  }

}
