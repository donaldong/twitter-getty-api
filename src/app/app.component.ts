import {Component, OnInit} from '@angular/core';
import { TwitterService } from './services/twitter.service';
import { GettyImagesService } from './services/getty-images.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ TwitterService, GettyImagesService ]
})

export class AppComponent implements OnInit {
  image: Image;
  tweet: Tweet;

  constructor(private twitter: TwitterService,
              private gettyImages: GettyImagesService) {
  }

  static rand_int(n: number): number {
    return Math.floor(Math.random() * n);
  }

  ngOnInit() {
    this.image = null;
    this.tweet = null;
    this.gettyImages.search('motivation').subscribe(() => {
      const index = AppComponent.rand_int(this.gettyImages.images.length);
      this.image = new Image(this.gettyImages.images[index]);
    });
    this.twitter.user_timeline('Inspire_Us').subscribe(object => {
      const index = AppComponent.rand_int(object.length);
      this.tweet = new Tweet(object[index]);
      console.log(this.tweet);
    });
  }
}

class Image {
  url: string;
  title: string;

  constructor(object: Object) {
    this.url = object['display_sizes'][0]['uri'];
    this.title = object['title'];
  }
}

class Tweet {
  time: string;
  text: string;

  constructor(object: Object) {
    this.text = object['text'];
    this.time = object['created_at'];
  }
}
