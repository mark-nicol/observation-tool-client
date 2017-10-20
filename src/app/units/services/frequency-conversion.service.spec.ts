import { TestBed, inject } from '@angular/core/testing';

import { FrequencyConversionService } from './frequency-conversion.service';

describe('FrequencyConversionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FrequencyConversionService]
    });
  });

  it('should be created', inject([FrequencyConversionService], (service: FrequencyConversionService) => {
    expect(service).toBeTruthy();
  }));
});
