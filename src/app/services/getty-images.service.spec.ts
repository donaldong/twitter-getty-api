import { TestBed, inject } from '@angular/core/testing';

import { GettyImagesService } from './getty-images.service';

describe('GettyImagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GettyImagesService]
    });
  });

  it('should be created', inject([GettyImagesService], (service: GettyImagesService) => {
    expect(service).toBeTruthy();
  }));
});
