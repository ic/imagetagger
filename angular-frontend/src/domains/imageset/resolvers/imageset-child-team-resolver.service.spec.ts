import { TestBed } from '@angular/core/testing';

import { ImagesetChildTeamResolver } from './imageset-child-team-resolver.service';

describe('ImagesetChildTeamResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImagesetChildTeamResolver = TestBed.get(ImagesetChildTeamResolver);
    expect(service).toBeTruthy();
  });
});
