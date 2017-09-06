import {Component, OnInit} from '@angular/core';

import * as _ from "lodash";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {


  isCollapsed = true;
  selectedGoal: any;

  items = [
    {
      title: 'PI Search',
      path: 'pi-entry'
    },
    {
      title: 'Project',
      path: 'project'
    },
    {
      title: 'Proposal',
      path: 'proposal'
    },
    {
      title: 'Planned Observing',
      path: 'plannedObs'
    },
    {
      title: 'Science Goals',
      path: 'sciGoals'
    }
  ];

  scienceGoals = [
    {
      title: 'Science Goal 1',
      path: 'sciGoals'
    },
    {
      title: 'Science Goal 2',
      path: 'sciGoals'
    },
    {
      title: 'Science Goal 3',
      path: 'sciGoals'
    }
  ];

  constructor() {
  }

  ngOnInit() {
    this.selectedGoal = this.scienceGoals[0];
  }

  click(newGoal) {
    this.selectedGoal = newGoal;
  }

  addGoal() {
    this.scienceGoals.push({title: 'New Goal', path: 'sciGoals'});
    return false;
  }

  removeGoal(toRemove) {
    _.remove(this.scienceGoals, toRemove);
    if (this.selectedGoal === toRemove) {
      this.selectedGoal = this.scienceGoals[0];
    }
  }


}
