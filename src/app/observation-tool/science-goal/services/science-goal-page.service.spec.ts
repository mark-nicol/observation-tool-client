import { TestBed, inject } from '@angular/core/testing';

import { ScienceGoalPageService } from './science-goal-page.service';

describe('ScienceGoalPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScienceGoalPageService]
    });
  });

  it('should be created', inject([ScienceGoalPageService], (service: ScienceGoalPageService) => {
    expect(service).toBeTruthy();
  }));
});
