import { TestBed } from '@angular/core/testing';

import { HsService } from './hs.service';

describe('HsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HsService = TestBed.get(HsService);
    expect(service).toBeTruthy();
  });
});
