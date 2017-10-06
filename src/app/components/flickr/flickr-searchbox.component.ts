import {
  Component,
  OnInit,
  ElementRef,
  EventEmitter, Output,
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {FlickrResult} from '../../models/flickr-result';
import {FlickrService} from '../../services/flickr.service';

@Component({
  selector: 'app-flickr-search-box',
  template: `
    <input type="text" class="form-control" placeholder="Search Flickr" autofocus>
  `
})

export class FlickrSearchBoxComponent implements OnInit {
  @Output() results: EventEmitter<FlickrResult[]> = new EventEmitter<FlickrResult[]>();

  constructor(public flickr: FlickrService,
              private el: ElementRef) {
  }

  ngOnInit(): void {
    // convert the `keyup` event into an observable stream
    Observable.fromEvent(this.el.nativeElement, 'keyup')
      .map((e: any) => e.target.value) // extract the value of the input
      .filter((text: string) => text.length > 1) // filter out if empty
      .debounceTime(250)                         // only once every 250ms
      // search, discarding old events if new input comes in
      .map((query: string) => this.flickr.search(query))
      .switch()
      // act on the return of the search
      .subscribe(
        (results: FlickrResult[]) => { // on sucesss
          this.results.next(results);
        },
        (err: any) => { // on error
          console.log(err);
        },
        () => { // on completion
        }
      );

  }
}
