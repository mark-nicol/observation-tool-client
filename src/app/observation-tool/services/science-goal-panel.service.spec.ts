import { TestBed, inject } from '@angular/core/testing';

import { ScienceGoalPanelService } from './science-goal-panel.service';

describe('ScienceGoalPanelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScienceGoalPanelService]
    });
  });

  it('should be created', inject([ScienceGoalPanelService], (service: ScienceGoalPanelService) => {
    expect(service).toBeTruthy();
  }));
});
