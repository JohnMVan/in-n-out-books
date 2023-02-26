//Title:  books.service.ts
//Author: John Vanhessche
//Date 24 February 2023
//Description:  TypeScript file for the books service component.

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBook } from './book.interface';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  //these are the 9 isbns that we are looking up in the call to the openlibrary.org/books api. 
  //should return 9 books on book-list component. 

  isbns: Array<string> = [
    '0345339681',
    '0261103571',
    '9780593099322',
    '9780261102361',
    '9780261102378',
    '9780590302715',
    '9780316769532',
    '9780743273565',
    '9780590405959'
  ]

  constructor(private http: HttpClient) { 
    
  }

  //these are the params that will be sent for the HTTP request
  //and returned from openlibrary.org.  We are submitting the isbn from the above array
  //and getting a match.
  getBooks() {
    let params = new HttpParams();
    params = params.append('bibkeys', `ISBN:${this.isbns.join(',')}`);
    params = params.append('format', 'json');
    params = params.append('jscmd', 'details');
    return this.http.get('https://openlibrary.org/api/books', {params: params})
  } 
}
