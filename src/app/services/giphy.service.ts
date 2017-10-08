import {
  Injectable,
  Inject
} from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { GiphyResult } from '../models/giphy-result';

@Injectable()
export class GiphyService {
  constructor(public http: Http) {
  }

  search(query: string): Observable<GiphyResult[]> {
    let params: string = [
      `q=${query}`,
      `api_key=dc6zaTOxFJmzC`,
      `limit=25`
    ].join('&');
    let queryUrl: string = `https://api.giphy.com/v1/gifs/search?${params}`;
    return this.http.get(queryUrl)
      .map((response: Response) => {
        console.log("response", response);
        return (<any>response.json()).data.map(data => {
           console.log("raw data", data); // uncomment if you want to debug
          return new GiphyResult({
            id: data.id,
            type: data.type,
            slug: data.slug,
            url: data.url,
            bitly_gif_url: data.bitly_gif_url,
            bitly_url: data.bitly_url,
            content_url: data.content_url,
            embed_url: data.embed_url,
            import_datetime: data.import_datetime,
            is_indexable: data.is_indexable,
            rating: data.rating,
            source: data.source,
            source_post_url: data.source_post_url,
            source_tld: data.source_tld,
            trending_datetime: data.trending_datetime,
            username: data.username,
            looping: data.images.looping.url,
            image: data.images.original.url

          });
        });
      });
  }
}
