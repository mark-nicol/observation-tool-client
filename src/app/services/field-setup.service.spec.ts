import { TestBed, inject } from '@angular/core/testing';

import { FieldSetupService } from './field-setup.service';

describe('FieldSetupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FieldSetupService]
    });
  });

  it('should be created', inject([FieldSetupService], (service: FieldSetupService) => {
    expect(service).toBeTruthy();
  }));
});
