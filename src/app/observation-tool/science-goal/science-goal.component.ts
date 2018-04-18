import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ITargetParameters} from '../shared/interfaces/project/science-goal/target-parameters.interface';
import {PersistenceService} from '../shared/services/persistence.service';

/**
 * Science goal component which contains tabbed science goal pages
 */

@Component({
  selector: 'app-science-goal',
  templateUrl: './science-goal.component.html',
  styleUrls: ['./science-goal.component.css']
})
export class ScienceGoalComponent implements OnInit {

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

  targets: ITargetParameters[];
  selectedTarget: string;

  /** Iterator for pages */
  pageKeys: (o) => string[] = Object.keys;

  lowerBound = 0;
  upperBound = 4;

  /**
   * Constructor
   */
  constructor(protected router: Router, private persistenceService: PersistenceService) {
  }

  ngOnInit() {
    this.persistenceService.loadScienceGoal(this.persistenceService.currentGoal);
    this.persistenceService.loadedGoal.subscribe(result => {
      this.targets = result.prj_TargetParameters;
      this.selectedTarget = this.targets[0].prj_sourceName;
    });
  }

  changeTarget(index: number) {
    this.persistenceService.setCurrentTarget(index);
  }

  addNewTarget() {
    this.targets.push({
      type: '',
      prj_isMosaic: false,
      prj_sourceName: 'New Source',
      prj_sourceCoordinates: null,
      prj_pmRA: null,
      prj_pmDec: null,
      prj_parallax: null,
      prj_nonSiderealMotion: false,
      solarSystemObject: null,
      prj_sourceEphemeris: '',
      prj_sourceVelocity: null,
      prj_index: this.targets.length - 1,
      prj_ExpectedProperties: null,
      prj_SinglePoint: null,
    });
  }

  removeTarget() {
    this.targets.pop();
  }

  scrollTargetsDown() {
    if (this.lowerBound > 0) {
      this.lowerBound--;
      this.upperBound--;
    }
  }

  scrollTargetsUp() {
    if (this.upperBound < this.targets.length - 1) {
      this.lowerBound++;
      this.upperBound++;
    }
  }

}
