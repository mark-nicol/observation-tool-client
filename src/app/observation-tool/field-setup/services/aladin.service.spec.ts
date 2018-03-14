import { TestBed, inject } from '@angular/core/testing';

import { AladinService } from './aladin.service';

describe('AladinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AladinService]
    });
  });

  it('should be created', inject([AladinService], (service: AladinService) => {
    expect(service).toBeTruthy();
  }));
});
