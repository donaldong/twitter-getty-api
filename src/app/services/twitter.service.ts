import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {observable} from 'rxjs/symbol/observable';


@Injectable()
export class TwitterService {
  url = '/twitter';

  constructor(private http: HttpClient) { }

  test() {
    this.http.post(this.url, 'elonmusk', { headers: new HttpHeaders({
        'work': 'please'
      })}).subscribe(object => {
      console.log(object);
    });
  }
}
