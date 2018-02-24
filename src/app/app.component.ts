import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { OAuth } from 'oauth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  oauth: OAuth;

  constructor() {
    this.oauth = new OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      environment.twitter_api_key,
      environment.twitter_api_secret,
      '1.0A',
      null,
      'HMAC-SHA1'
    );

    this.oauth.get(
      'https://api.twitter.com/1.1/search/tweets.json?q=' + 'apple' + '&count=10',
      environment.twitter_access_token,
      environment.twitter_token_secret,
      function(e, data, res) {
        console.log('twitter api call complete');
        if (e) { console.log(e); }
        data = JSON.parse(data);
        console.log(data);
      });
  }
}
