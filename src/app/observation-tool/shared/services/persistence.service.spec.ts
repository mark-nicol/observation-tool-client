import {HttpClientTestingModule} from '@angular/common/http/testing';
import {inject, TestBed} from '@angular/core/testing';

import {PersistenceService} from './persistence.service';

describe('PersistenceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        PersistenceService
      ]
    });
  });

  it('should be created', inject([PersistenceService], (service: PersistenceService) => {
    expect(service).toBeTruthy();
  }));
});
