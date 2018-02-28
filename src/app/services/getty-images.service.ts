import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GettyImagesService {
  public images: Array<Object>;
  private headers: HttpHeaders;

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
      return this.map(this.http.get('https://api.gettyimages.com/v3/search/' +
        'images?fields=id,title,thumb,referral_destinations&sort_order=best', {
        headers: this.headers
      }));
    }
    return this.map(this.http.get('https://api.gettyimages.com/v3/search/' +
      'images?phrase=' + phrase, {
      headers: this.headers
    }));
  }
}
