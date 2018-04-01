import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GettyImagesService {
  public images: Array<Object>;
  private requestURL = 'https://fast-badlands-94575.herokuapp.com/getty_images/search';

  constructor(private http: HttpClient) { }

  private map(observable: Observable<Object>) {
    return observable.map(object => {
      this.images = object['images'];
    });
  }

  public search(phrase: string = null) {
    return this.map(this.http.get(this.requestURL + '?phrase=' + phrase));
  }
}
