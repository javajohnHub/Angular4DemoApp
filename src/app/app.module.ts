import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {BookSearchComponent} from './components/books/book-search.component';
import {SearchBoxComponent} from './components/books/searchbox.component';
import {SearchResultComponent} from './components/books/search-result.component';
import {BookService} from './services/book.service';
import { TooltipModule, RatingModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import {routing} from './app-routing.module';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {NavbarComponent} from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BookSearchComponent,
    SearchBoxComponent,
    SearchResultComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TooltipModule.forRoot(),
    RatingModule.forRoot(),
    FormsModule,
    routing
  ],
  providers: [BookService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
