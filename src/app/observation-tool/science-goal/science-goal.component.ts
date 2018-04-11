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
      path: 'field-setup/' + this.persistenceService.currentTarget
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

  /**
   * Constructor
   */
  constructor(protected router: Router, private persistenceService: PersistenceService) {
  }

  ngOnInit() {
    this.persistenceService.getScienceGoal().subscribe(result => {
      console.log(result);
      this.targets        = result.prj_TargetParameters;
      this.selectedTarget = this.targets[0].sourceName;
    });
  }

  changeTarget(index: number) {
    this.persistenceService.currentTarget = index;
    this.pages.fieldSetup.path            = 'field-setup/' + this.persistenceService.currentTarget;
  }

  addNewTarget() {
    this.targets.push({
      type: '',
      isMosaic: false,
      sourceName: 'New Source',
      sourceCoordinates: null,
      pmRA: null,
      pmDec: null,
      parallax: null,
      nonSiderealMotion: false,
      solarSystemObject: null,
      sourceEphemeris: '',
      sourceVelocity: null,
      ephemerisFileName: '',
      index: this.targets.length - 1,
      sdReferencePosition: null,
      ExpectedProperties: null,
      SinglePoint: null,
    });
  }

  removeTarget() {
    this.targets.pop();
  }

}
