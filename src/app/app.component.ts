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
  title = 'app';

  constructor(twitter: TwitterService, gettyImages: GettyImagesService) {
    twitter.test();
    gettyImages.search('city').subscribe(object => {
      console.log(gettyImages.images[0]);
    });
  }
}
