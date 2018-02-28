import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GettyImagesService {
  public images: Array<Object>;
  private headers: HttpHeaders;
  private requestURL = 'https://api.gettyimages.com/v3/search/images?' +
    'embed_content_only=true&fields=comp&graphical_styles=photography&minimum_size=xx_large&sort_order=most_popular';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Api-Key': environment.getty_images_key
    });
  }

  private map(observable: Observable<Object>) {
    return observable.map(object => {
      this.images = object['images'];
    });
  }

  public search(phrase: string = null) {
    if (phrase === null) {
      return this.map(this.http.get(this.requestURL,
        {
          headers: this.headers
        }));
    }
    return this.map(this.http.get(this.requestURL + '&phrase=' + phrase,
      {
        headers: this.headers
      }));
  }
}
