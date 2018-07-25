/*
 * ALMA - Atacama Large Millimeter Array
 * Copyright (c) UKATC - UK Astronomy Technology Centre, Science and Technology Facilities Council, 2018
 * (in the framework of the ALMA collaboration).
 * All rights reserved.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307  USA
 */

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProjectService} from '../shared/services/project.service';
import {ITargetParameters} from '../shared/interfaces/apdm/target-parameters.interface';

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

  /** Iterator for pages */
  pageKeys: (o) => string[] = Object.keys;

  menuOpen = true;

  /**
   * Constructor
   */
  constructor(public router: Router, private projectService: ProjectService) {
  }

  ngOnInit() {
    this.projectService.loadScienceGoal(this.projectService.currentGoal);
    this.projectService.loadedGoal.subscribe(result => {
      this.goalName = result.name;
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

  get targets(): ITargetParameters[] {
    return this.projectService.loadedGoal.value.targetParameters;
  }

}
