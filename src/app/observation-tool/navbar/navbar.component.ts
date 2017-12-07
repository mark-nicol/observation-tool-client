import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import * as _ from 'lodash';
import {NavItemInterface} from '../shared/interfaces/navbar-item.interface';
import {PersistenceService} from '../shared/services/persistence.service';

/**
 * The navbar component at the top of the application
 */

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  /** Controls collapsing of the navbar on smaller screen sizes */
  isCollapsed = true;

  /** Keeps track of the currently selected science goal */
  selectedGoal: any;

  /** All items to show on the navbar menu and their routing paths */
  items: NavItemInterface[] = [
    {
      title: 'Project',
      path: 'project/pi-select'
    },
    {
      title: 'Proposal',
      path: 'project/proposal'
    },
    {
      title: 'Planned Observing',
      path: 'project/planned-observing'
    },
    {
      title: 'Science Goals',
      path: 'project/science-goals'
    }
  ];

  /**
   * Selectable science goals
   *
   * Currently unused
   * */
  scienceGoals: NavItemInterface[] = [
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

  constructor(private router: Router, private persistenceService: PersistenceService) {

  }

  /**
   * Sets the currently selected goal to the first in the list
   */
  ngOnInit() {
    this.selectedGoal = this.scienceGoals[0];
  }

  /**
   * Sets the currently selected goal to the item selected in the menu
   * @param {string} newGoal The user selected goal to be set
   */
  click(newGoal: string) {
    this.selectedGoal = newGoal;
  }

  /**
   * Adds a new goal to the available goals
   *
   * @return false
   */
  addGoal() {
    this.scienceGoals.push({title: 'New Goal', path: 'sciGoals'});
    return false;
  }

  /**
   * Removes the selected goal from the available goals
   * @param toRemove The goal to remove from the list
   */
  removeGoal(toRemove: string) {
    _.remove(this.scienceGoals, toRemove);
    if (this.selectedGoal === toRemove) {
      this.selectedGoal = this.scienceGoals[0];
    }
  }

  exportClick() {
    this.persistenceService.saveProject();
  }

}
