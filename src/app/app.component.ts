import { Component } from '@angular/core';
import { TwitterService } from './services/twitter.service';
import { GettyImagesService } from './services/getty-images.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ TwitterService, GettyImagesService ]
})

export class AppComponent {
  image: Image;

  constructor(twitter: TwitterService, gettyImages: GettyImagesService) {
    this.image = null;
    gettyImages.search('city').subscribe(() => {
      const index = AppComponent.rand_int(gettyImages.images.length);
      this.image = new Image(gettyImages.images[index]);
    });
  }

  static rand_int(n: number): number {
    return Math.floor(Math.random() * n);
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
