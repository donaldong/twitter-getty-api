import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class TwitterService {

  constructor(private http: HttpClient) {
  }

  static getHttpHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': this.getAuthorizationHeader(),
      'Host': 'api.twitter.com'
    });
  }

  static getAuthorizationHeader() {
    return 'OAuth oauth_consumer_key="' + this.getPercentEncoding(environment.twitter_api_key) + '",' +
      'oauth_nonce="' + this.getPercentEncoding(environment.twitter_api_secret) + '",' +
      'oauth_signature="tnnArxj06cWHq44gCs1OSKk%2FjLY%3D",' +
      'oauth_signature_method="HMAC-SHA1",' +
      'oauth_timestamp="1318622958",' +
      'oauth_token="370773112-GmHxMAgYyLbNEtIKZeRNFsMKPR9EyMZeS9weJAEb",' +
      'oauth_version="1.0"';
  }

  static getPercentEncoding(parameter: string) {
    return parameter;
  }

  test() {
    const httpOptions = {
      headers: TwitterService.getHttpHeaders()
    };
    console.log(httpOptions);
  }

}
