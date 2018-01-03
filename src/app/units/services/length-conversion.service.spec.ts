import {inject, TestBed} from '@angular/core/testing';

import {LengthConversionService} from './length-conversion.service';

describe('LengthConversionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LengthConversionService]
    });
  });

  it('should be created', inject([LengthConversionService], (service: LengthConversionService) => {
    expect(service).toBeTruthy();
  }));

});
