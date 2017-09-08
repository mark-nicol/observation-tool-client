import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-science-goal',
  templateUrl: './science-goal.component.html',
  styleUrls: ['./science-goal.component.scss']
})
export class ScienceGoalComponent implements OnInit {

  selectedGoal: string;
  scienceGoals = {
    'general': {title: 'General', path: 'general'},
    'fieldSetup': {title: 'Field Setup', path: 'fieldSetup'},
    'spectralSetup': {title: 'Spectral Setup', path: 'spectralSetup'},
    'calibrationSetup': {title: 'Calibration Setup', path: 'calibrationSetup'},
    'control': {title: 'Control and Performance', path: 'control'},
    'technicalJustification': {title: 'Technical Justification', path: 'technicalJustification'}
  };
  goalKeys = Object.keys;

  constructor() { }

  ngOnInit() {
  }

}
