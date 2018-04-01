import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TwitterService {
  constructor(private http: HttpClient) { }

  user_timeline(screenName: string): Observable<any> {
    return this.http.get('https://fast-badlands-94575.herokuapp.com/twitter/user_timeline?screen_name=' + screenName);
  }
}
