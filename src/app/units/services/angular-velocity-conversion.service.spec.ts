import {inject, TestBed} from '@angular/core/testing';
import {AngularVelocityConversionService} from './angular-velocity-conversion.service';

describe('AngularVelocityConversionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularVelocityConversionService]
    });
  });

  it('should be created', inject([AngularVelocityConversionService], (service: AngularVelocityConversionService) => {
    expect(service).toBeTruthy();
  }));
});
