import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {BookSearchComponent} from './components/books/book-search.component';
import {BookDetailComponent} from './components/books/book-detail.component';
import {SearchBoxComponent} from './components/books/searchbox.component';
import {SearchResultComponent} from './components/books/search-result.component';
import {BookService} from './services/book.service';

@NgModule({
  declarations: [
    AppComponent,
    BookSearchComponent,
    BookDetailComponent,
    SearchBoxComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
