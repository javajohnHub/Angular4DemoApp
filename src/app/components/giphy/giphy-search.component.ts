import { Component } from '@angular/core';
import {GiphyResult} from '../../models/giphy-result';

@Component({
  selector: 'app-giphy-search',
  template: `
      <form>
        <div class="form-group well">
          <app-giphy-search-box
            (loading)="loading = $event"
            (results)="updateResults($event)"
          ></app-giphy-search-box>
        </div>
      </form>
      <div *ngIf="results" class="search-res">
        <app-giphy-result
          *ngFor="let result of results"
          [result]="result">
        </app-giphy-result>
      </div>
  `,
})
export class GiphySearchComponent {
  results: GiphyResult[];
  loading: boolean;
  updateResults(results: GiphyResult[]): void {
    this.results = results;
     console.log("results:", this.results); // uncomment to take a look
  }
}

