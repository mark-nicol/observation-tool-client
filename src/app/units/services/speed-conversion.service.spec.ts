import { TestBed, inject } from '@angular/core/testing';

import { SpeedConversionService } from './speed-conversion.service';

describe('SpeedConversionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpeedConversionService]
    });
  });

  it('should be created', inject([SpeedConversionService], (service: SpeedConversionService) => {
    expect(service).toBeTruthy();
  }));
});
