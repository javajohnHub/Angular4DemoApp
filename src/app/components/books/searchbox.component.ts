import {
  Component,
  OnInit,
  ElementRef,
  EventEmitter,
  Output
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switch';
import {BookSearchResult} from '../../models/book-search-result';
import {BookService} from '../../services/book.service';

@Component({
  selector: 'app-search-box',
  template: `
    <form>
      <div id="search">
        <input type="text" tooltip="Search Google Books" placement="bottom" class="form-control" placeholder="Search Google Books" autofocus>
      </div>
    </form>
  `
})

export class SearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<BookSearchResult[]> = new EventEmitter<BookSearchResult[]>();

  constructor(public book: BookService,
              private el: ElementRef) {
  }

  ngOnInit(): void {
    // convert the `keyup` event into an observable stream
    Observable.fromEvent(this.el.nativeElement, 'keyup')
      .map((e: any) => e.target.value) // extract the value of the input
      .filter((text: string) => text.length > 1) // filter out if empty
      .debounceTime(250)                         // only once every 250ms
      .do(() => this.loading.next(true))         // enable loading
      // search, discarding old events if new input comes in
      .map((query: string) => this.book.searchBooks(query))
      .switch()
      // act on the return of the search
      .subscribe(
        (results: BookSearchResult[]) => { // on sucesss
          this.loading.next(false);
          this.results.next(results);
        },
        (err: any) => { // on error
          console.log(err);
          this.loading.next(false);
        },
        () => { // on completion
          this.loading.next(false);
        }
      );

  }
}
