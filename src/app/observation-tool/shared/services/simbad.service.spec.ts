import { TestBed, inject } from '@angular/core/testing';

import { SimbadService } from './simbad.service';

describe('SimbadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimbadService]
    });
  });

  it('should be created', inject([SimbadService], (service: SimbadService) => {
    expect(service).toBeTruthy();
  }));
});
