import {inject, TestBed} from '@angular/core/testing';
import {LatitudeConversionService} from './latitude-conversion.service';

describe('LatitudeConversionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LatitudeConversionService]
    });
  });

  it('should be created', inject([LatitudeConversionService], (service: LatitudeConversionService) => {
    expect(service).toBeTruthy();
  }));
});
