import { Component, state, animate, style, trigger, transition } from '@angular/core';
import {BookSearchResult} from '../../models/book-search-result';

@Component({
  selector: 'app-book-search',
  template: `
  <section>
      <div class="row">
          <app-search-box
             (loading)="loading = $event"
             (results)="updateResults($event)">
          </app-search-box>
      </div><br/><br/>
      <div class="row">
        <app-search-result
          *ngFor="let result of results"
          [result]="result">
        </app-search-result>
      </div>
  </section>
  `
})
export class BookSearchComponent {
  results: BookSearchResult[];
  public loading;

  updateResults(results: BookSearchResult[]): void {
    this.results = results;
     console.log("results:", this.results); // uncomment to take a look
  }
}

