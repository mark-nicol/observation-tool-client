import {Component} from '@angular/core';
import {ScienceGoalInterface} from '../shared/interfaces/science-goal.interface';
import {PersistenceService} from '../shared/services/persistence.service';

/**
 * Science goal component which contains tabbed science goal pages
 */

@Component({
  selector: 'app-science-goal',
  templateUrl: './science-goal.component.html',
  styleUrls: ['./science-goal.component.scss']
})
export class ScienceGoalComponent {

  pages = {
    'general': {
      path: 'general',
      text: 'General'
    },
    'fieldSetup': {
      path: 'field-setup',
      text: 'Field Setup'
    },
    'spectralSetup': {
      path: 'spectral-setup',
      text: 'Spectral Setup'
    },
    'calibrationSetup': {
      path: 'calibration-setup',
      text: 'Calibration Setup'
    },
    'controlPerformance': {
      path: 'control-performance',
      text: 'Control and Performance'
    },
    'technicalJustification': {
      path: 'technical-justification',
      text: 'Technical Justification'
    }
  };

  pageKeys = Object.keys;

  selectedPage = 'general';

  /**
   * Constructor
   */
  constructor(private persistenceService: PersistenceService) {

  }

}
