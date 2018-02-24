import { Component } from '@angular/core';
import {TwitterService} from './services/twitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ TwitterService ]
})

export class AppComponent {
  title = 'app';

  constructor(twitter: TwitterService) {
    twitter.test();
  }
}
