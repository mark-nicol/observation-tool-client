import {inject, TestBed} from '@angular/core/testing';
import {SensitivityConversionService} from './sensitivity-conversion.service';

describe('SensitivityConversionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SensitivityConversionService]
    });
  });

  it('should be created', inject([SensitivityConversionService], (service: SensitivityConversionService) => {
    expect(service).toBeTruthy();
  }));
});
