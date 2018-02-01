import {Component} from '@angular/core';
import {Router} from '@angular/router';

/**
 * Science goal component which contains tabbed science goal pages
 */

@Component({
             selector: 'app-science-goal',
             templateUrl: './science-goal.component.html',
             styleUrls: ['./science-goal.component.scss']
           })
export class ScienceGoalComponent {

  /** The currently selected goal page */
  selectedPage = 'general';

  /** Dict of all science goal page data */
  pages = {
    'general': {
      text: 'General',
      path: 'general'
    },
    'fieldSetup': {
      text: 'Field Setup',
      path: 'field-setup'
    },
    'spectralSetup': {
      text: 'Spectral Setup',
      path: 'spectral-setup'
    },
    'calibrationSetup': {
      text: 'Calibration Setup',
      path: 'calibration-setup'
    },
    'controlPerformance': {
      text: 'Control and Performance',
      path: 'control-performance'
    },
    'technicalJustification': {
      text: 'Technical Justification',
      path: 'technical-justification'
    }
  };

  /** Iterator for pages */
  pageKeys: (o) => string[] = Object.keys;

  /**
   * Constructor
   */
  constructor(private router: Router) {
  }

}
