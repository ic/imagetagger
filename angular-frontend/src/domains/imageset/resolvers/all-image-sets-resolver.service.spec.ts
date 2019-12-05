import { TestBed } from '@angular/core/testing';

import { AllImageSetsResolver } from './all-image-sets-resolver.service';

describe('AllImageSetsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllImageSetsResolver = TestBed.get(AllImageSetsResolver);
    expect(service).toBeTruthy();
  });
});
