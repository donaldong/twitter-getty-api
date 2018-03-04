import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TwitterService {
  constructor(private http: HttpClient) { }

  user_timeline(screenName: string): Observable<any> {
    return this.http.post('/twitter/user_timeline', screenName);
  }
}
