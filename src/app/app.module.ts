import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {BookSearchComponent} from './components/books/book-search.component';
import {BookDetailComponent} from './components/books/book-detail.component';
import {SearchBoxComponent} from './components/books/searchbox.component';
import {SearchResultComponent} from './components/books/search-result.component';
import {BookService} from './services/book.service';
import { TooltipModule, RatingModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
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
    HttpModule,
    TooltipModule.forRoot(),
    RatingModule.forRoot(),
    FormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
