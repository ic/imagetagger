import { TestBed } from '@angular/core/testing';

import { ImagesetChildImagesResolver } from './imageset-child-images-resolver.service';

describe('ImagesetChildImagesResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImagesetChildImagesResolver = TestBed.get(ImagesetChildImagesResolver);
    expect(service).toBeTruthy();
  });
});
