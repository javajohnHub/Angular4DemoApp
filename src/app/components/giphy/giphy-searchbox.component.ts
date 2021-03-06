import {
  Component,
  OnInit,
  ElementRef,
  EventEmitter, Output,
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {GiphyResult} from '../../models/giphy-result';
import {GiphyService} from '../../services/giphy.service';

@Component({
  selector: 'app-giphy-search-box',
  template: `
    <input type="text" class="form-control" placeholder="Search Giphy" autofocus>
  `
})

export class GiphySearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<GiphyResult[]> = new EventEmitter<GiphyResult[]>();

  constructor(public giphy: GiphyService,
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
      .map((query: string) => this.giphy.search(query))
      .switch()
      // act on the return of the search
      .subscribe(
        (results: GiphyResult[]) => { // on sucesss
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
