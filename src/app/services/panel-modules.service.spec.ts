import { TestBed, inject } from '@angular/core/testing';

import { PanelModulesService } from './panel-modules.service';

describe('PanelModulesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PanelModulesService]
    });
  });

  it('should be created', inject([PanelModulesService], (service: PanelModulesService) => {
    expect(service).toBeTruthy();
  }));
});
