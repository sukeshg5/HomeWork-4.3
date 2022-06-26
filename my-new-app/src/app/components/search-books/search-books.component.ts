import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service';
import { Book } from './../../service/Book';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent implements OnInit {
  Books:any = [];
  currentBook:any;
  currentIndex = -1;
  title = '';

  constructor(private crudService: CrudService) { }

  

  ngOnInit(): void {
   
  }

  searchTitle(): void {
    this.currentBook = {};
    this.currentIndex = -1;
    this.crudService.GetBookByName(this.title)
      .subscribe({
        next: (data) => {
          this.Books = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteBook(id).subscribe((res) => {
        this.Books.splice(i, 1);
      })
    }
  }

}
