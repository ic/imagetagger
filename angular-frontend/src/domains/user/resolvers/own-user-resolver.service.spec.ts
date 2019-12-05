import { TestBed } from '@angular/core/testing';

import { OwnUserResolver } from './own-user-resolver.service';

describe('AuthenticatedUserResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OwnUserResolver = TestBed.get(OwnUserResolver);
    expect(service).toBeTruthy();
  });
});
