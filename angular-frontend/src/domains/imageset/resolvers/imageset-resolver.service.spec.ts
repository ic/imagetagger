import { TestBed } from '@angular/core/testing';

import { ImagesetResolver } from './imageset-resolver.service';

describe('ImageSetFromRouteResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImagesetResolver = TestBed.get(ImagesetResolver);
    expect(service).toBeTruthy();
  });
});
