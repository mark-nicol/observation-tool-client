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
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {NavItemInterface} from '../shared/interfaces/navbar-item.interface';
import {ProjectService} from '../shared/services/project.service';
import {SuiModalService} from 'ng2-semantic-ui';
import {ProjectImportModal} from '../shared/components/project-import-modal/project-import-modal.component';
import {IScienceGoal} from '../shared/interfaces/apdm/science-goal.interface';
import {IObsProject} from '../shared/interfaces/apdm/obs-project.interface';

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
              public persistenceService: ProjectService,
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

  get scienceGoals(): IScienceGoal[] {
    if (this.persistenceService.hasScienceGoals()) {
      return <IScienceGoal[]>this.persistenceService.loadedProposal.value.scienceGoals;
    }
  }

  addScienceGoal() {
    this.persistenceService.addScienceGoal();
  }

  removeScienceGoal() {
    this.persistenceService.removeScienceGoal();
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
      .onApprove(result => {
        this.persistenceService.selectProject();
        this.router.navigate(['/project']).then();
      })
      .onDeny(result => {
      });
  }

}
