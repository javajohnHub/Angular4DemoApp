import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {BookSearchComponent} from './components/books/book-search.component';
import {SearchBoxComponent} from './components/books/searchbox.component';
import {SearchResultComponent} from './components/books/search-result.component';
import {BookService} from './services/book.service';
import {FlickrSearchComponent} from './components/flickr/flickr-search.component';
import {FlickrSearchBoxComponent} from './components/flickr/flickr-searchbox.component';
import {FlickrResultComponent} from './components/flickr/flickr-result.component';
import {FlickrService} from './services/flickr.service';
import { TooltipModule, RatingModule, CollapseModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import {routing} from './app-routing.module';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {NavbarComponent} from './components/navbar/navbar.component';
import {GiphyService} from './services/giphy.service';
import {GiphyResultComponent} from './components/giphy/giphy-result.component';
import {GiphySearchBoxComponent} from './components/giphy/giphy-searchbox.component';
import {GiphySearchComponent} from './components/giphy/giphy-search.component';

@NgModule({
  declarations: [
    AppComponent,
    BookSearchComponent,
    SearchBoxComponent,
    SearchResultComponent,
    NavbarComponent,
    FlickrResultComponent,
    FlickrSearchBoxComponent,
    FlickrSearchComponent,
    GiphyResultComponent,
    GiphySearchComponent,
    GiphySearchBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TooltipModule.forRoot(),
    RatingModule.forRoot(),
    CollapseModule.forRoot(),
    FormsModule,
    routing
  ],
  providers: [BookService, FlickrService, GiphyService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
