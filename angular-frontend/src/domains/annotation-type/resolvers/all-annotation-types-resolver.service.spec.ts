import { TestBed } from '@angular/core/testing';

import { AllAnnotationTypesResolver } from './all-annotation-types-resolver.service';

describe('AllAnnotationTypesResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllAnnotationTypesResolver = TestBed.get(AllAnnotationTypesResolver);
    expect(service).toBeTruthy();
  });
});
