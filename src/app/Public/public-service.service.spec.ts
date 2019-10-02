import { TestBed } from '@angular/core/testing';

import { PublicServiceService } from './public-service-get.service';

describe('PublicServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PublicServiceService = TestBed.get(PublicServiceService);
    expect(service).toBeTruthy();
  });
});
