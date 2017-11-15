import {inject, TestBed} from '@angular/core/testing';

import {AngleConversionService} from './angle-conversion.service';

describe('AngleConversionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngleConversionService]
    });
  });

  it('should be created', inject([AngleConversionService], (service: AngleConversionService) => {
    expect(service).toBeTruthy();
  }));
});
