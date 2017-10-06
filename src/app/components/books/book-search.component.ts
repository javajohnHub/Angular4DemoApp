import { Component } from '@angular/core';
import {BookSearchResult} from '../../models/book-search-result';

@Component({
  selector: 'app-book-search',
  template: `

    <div>
      <form>
        <div class="form-group well">
          <app-search-box
            (results)="updateResults($event)">
          </app-search-box>
        </div>
      </form>

      <div *ngIf="results" class="search-res">
        <app-search-result
          *ngFor="let result of results"
          [result]="result">
        </app-search-result>
      </div>
    </div>
  `
})
export class BookSearchComponent {
  results: BookSearchResult[];

  updateResults(results: BookSearchResult[]): void {
    this.results = results;
  }
}

