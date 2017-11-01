import {Component} from '@angular/core';
import {ScienceGoalPage} from '../../../models/science-goal-page';
import {ScienceGoalPanelService} from '../../../services/science-goal-panel.service';

/**
 * Contains type and visualisation components
 */

@Component({
  selector: 'app-spectral-setup',
  templateUrl: './spectral-setup.component.html',
  styleUrls: ['./spectral-setup.component.scss']
})
export class SpectralSetupComponent extends ScienceGoalPage {

  /**
   * Calls super constructor
   * @param scienceGoalPanelService Injected service to be used in parent class
   */
  constructor(scienceGoalPanelService: ScienceGoalPanelService) {
    super(scienceGoalPanelService, 'spectralSetup');
  }

}
