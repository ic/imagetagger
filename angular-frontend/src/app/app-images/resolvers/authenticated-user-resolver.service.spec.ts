import { TestBed } from '@angular/core/testing';

import { AuthenticatedUserResolver } from './authenticated-user-resolver.service';

describe('AuthenticatedUserResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticatedUserResolver = TestBed.get(AuthenticatedUserResolver);
    expect(service).toBeTruthy();
  });
});
