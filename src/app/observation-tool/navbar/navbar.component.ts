import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {NavItemInterface} from '../shared/interfaces/navbar-item.interface';
import {ProjectService} from '../shared/services/project.service';
import {SuiModalService} from 'ng2-semantic-ui';
import {ProjectImportModal} from '../shared/components/project-import-modal/project-import-modal.component';
import {ObsProject} from '../shared/classes/obsproject';
import {ScienceGoal} from '../shared/classes/science-goal/science-goal';

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

  sciGoalDropdownOpen = false;

  /** All items to show on the navbar menu and their routing paths */
  items: NavItemInterface[] = [
    {
      title: 'Project',
      path: 'project/pi-entry',
      icon: 'sitemap icon'
    },
    {
      title: 'Proposal',
      path: 'project/proposal',
      icon: 'file alternate icon'
    },
    {
      title: 'Planned Observing',
      path: 'project/planned-observing',
      icon: 'calendar alternate icon'
    },
    {
      title: 'Science Goals',
      path: 'science-goals',
      icon: 'bullseye icon'
    }
  ];

  mobileMenuOpen = true;
  userMenuOpen = true;
  scienceGoalMenuOpen = true;

  constructor(protected router: Router,
              protected persistenceService: ProjectService,
              private suiModalService: SuiModalService,
              private location: Location) {

  }

  /**
   * Sets the currently selected goal to the first in the list
   */
  ngOnInit() {

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
    return false;
  }

  /**
   * Removes the selected goal from the available goals
   * @param toRemove The goal to remove from the list
   */
  removeGoal(toRemove: string) {
  }

  exportClick() {
  }

  get scienceGoals(): ScienceGoal[] {
    if (this.persistenceService.hasScienceGoals()) {
      return this.persistenceService.loadedProposal.value.prj_ScienceGoal;
    }
  }

  setCurrentGoal(event: number) {
    this.persistenceService.setCurrentTarget(0);
    this.persistenceService.loadScienceGoal(event);
    this.persistenceService.currentGoal = event;
    if (this.router.url.indexOf('science-goals') < 0) {
      this.router.navigate(['science-goals']).then();
    }
  }

  makeProjectImportModal() {
    this.suiModalService
      .open(new ProjectImportModal())
      .onApprove((result: ObsProject) => {
        this.persistenceService.selectProject(result);
        this.router.navigate(['/project']).then();
      })
      .onDeny(result => {
      });
  }

}
