import { TestBed, inject } from '@angular/core/testing';

import { PointingService } from './pointing.service';

describe('PointingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PointingService]
    });
  });

  it('should be created', inject([PointingService], (service: PointingService) => {
    expect(service).toBeTruthy();
  }));
});
