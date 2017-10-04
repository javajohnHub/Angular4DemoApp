/*import {
  Injectable,
  Inject
} from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import { SearchResult } from './search-result';

@Injectable()
export class BookService {
  private API_PATH: string = 'https://www.googleapis.com/books/v1/volumes';
  constructor(public http: Http) {}


  searchBooks(queryTitle: string): Observable<SearchResult[]> {
    return this.http.get(`${this.API_PATH}?q=${queryTitle}`)
      .map(res => res.json().items);
  }
}*/
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Book } from '../models/book';

@Injectable()
export class BookService {
  private API_PATH = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: Http) {}

  searchBooks(queryTitle: string): Observable<Book[]> {
    return this.http.get(`${this.API_PATH}?q=${queryTitle}`)
      .map(res => res.json().items);
  }

  retrieveBook(volumeId: string): Observable<Book> {
    return this.http.get(`${this.API_PATH}/${volumeId}`)
      .map(res => res.json());
  }
}
