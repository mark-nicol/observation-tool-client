import { TestBed, inject } from '@angular/core/testing';

import { ValueConversionService } from './value-conversion.service';

describe('ValueConversionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValueConversionService]
    });
  });

  it('should be created', inject([ValueConversionService], (service: ValueConversionService) => {
    expect(service).toBeTruthy();
  }));
});
