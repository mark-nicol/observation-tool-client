import {HttpClientTestingModule} from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';

import { SimbadService } from './simbad.service';

describe('SimbadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SimbadService]
    });
  });

  it('should be created', inject([SimbadService], (service: SimbadService) => {
    expect(service).toBeTruthy();
  }));
});
