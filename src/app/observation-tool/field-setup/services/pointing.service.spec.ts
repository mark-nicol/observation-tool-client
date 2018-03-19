import { TestBed, inject } from '@angular/core/testing';
import {AladinService} from './aladin.service';

import { PointingService } from './pointing.service';

describe('PointingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PointingService, AladinService]
    });
  });

  it('should be created', inject([PointingService], (service: PointingService) => {
    expect(service).toBeTruthy();
  }));
});