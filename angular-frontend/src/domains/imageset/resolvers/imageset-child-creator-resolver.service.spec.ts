import { TestBed } from '@angular/core/testing';

import { ImagesetChildCreatorResolver } from './imageset-child-creator-resolver.service';

describe('ImagesetChildCreatorResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImagesetChildCreatorResolver = TestBed.get(ImagesetChildCreatorResolver);
    expect(service).toBeTruthy();
  });
});
