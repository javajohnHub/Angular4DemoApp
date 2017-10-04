import {
  Component, Input,
} from '@angular/core';
import {BookSearchResult} from '../../models/book-search-result';

@Component({
  selector: 'app-search-result',
  template: `
   <div>
   <h3><a href="{{canonicalVolumeLink}}" target="_blank">{{title}}</a></h3>
     <img class="img-responsive img-thumbnail" *ngIf="thumbnail" [src]="thumbnail">
   <small *ngIf="subtitle">{{subtitle}}</small><br/><span style="color:#8dce56;font-size: xx-large;">{{result.volumeInfo.averageRating || 0}} </span>stars
     <span style="color:midnightblue">{{ratingsCount || 0}}</span> votes
     <div class="thumbnail">
        
        <div class="caption">
          <p *ngIf="description">{{description}}</p>
         </div>
        {{authors}}
      </div>
      <span style="color: midnightblue">
      <div *ngIf="epubIsAvailable">Available in epub</div>
      <div *ngIf="pdfIsAvailable">Available in pdf</div>
      </span>
      <hr/>
    </div>
  `
})
export class SearchResultComponent {
  @Input() result: BookSearchResult;

  get id() {
    return this.result.id;
  }

  get title() {
    return this.result.volumeInfo.title;
  }

  get subtitle() {
    return this.result.volumeInfo.subtitle;
  }

  get description() {
    return this.result.volumeInfo.description;
  }
  get ratingsCount(){
    return this.result.volumeInfo.ratingsCount;
  }
  get authors() {
    return this.result.volumeInfo.authors;
  }
  get canonicalVolumeLink() {
    return this.result.volumeInfo.canonicalVolumeLink;
  }
  get pdfIsAvailable(){
    return this.result.accessInfo.pdf.isAvailable;
  }
  get epubIsAvailable(){
    return this.result.accessInfo.epub.isAvailable;
  }

  get thumbnail(): string | boolean {
    if (this.result.volumeInfo.imageLinks) {
      return this.result.volumeInfo.imageLinks.smallThumbnail;
    }

    return false;
  }
}
