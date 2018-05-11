import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ITargetParameters} from '../shared/interfaces/project/science-goal/target-parameters.interface';
import {ProjectService} from '../shared/services/project.service';

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

  currentTarget: number;
  goalName: string;
  targets: ITargetParameters[];

  /** Iterator for pages */
  pageKeys: (o) => string[] = Object.keys;

  menuOpen = true;

  /**
   * Constructor
   */
  constructor(protected router: Router, private projectService: ProjectService) {
  }

  ngOnInit() {
    this.projectService.loadScienceGoal(this.projectService.currentGoal);
    this.projectService.loadedGoal.subscribe(result => {
      this.targets = result.prj_TargetParameters;
      this.goalName = result.prj_name;
    });
    this.projectService.currentTarget.subscribe(result => {
      this.currentTarget = result;
    });
  }

  changeTarget(index: number) {
    this.projectService.setCurrentTarget(index);
  }

  addSource() {
    this.projectService.addSource();
  }

  removeSource() {
    this.projectService.removeSource();
  }

}
