import { TestBed } from '@angular/core/testing';

import { OwnTeamsResolver } from './own-teams-resolver.service';

describe('OwnTeamsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OwnTeamsResolver = TestBed.get(OwnTeamsResolver);
    expect(service).toBeTruthy();
  });
});
