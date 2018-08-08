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

import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {SuiModalService} from 'ng2-semantic-ui';
import {AlmaInvestigatorSearchModal} from '../../../../alma-investigator-search/components/modal/modal.component';
import {AlmaInvestigatorSearchService} from '../../../../alma-investigator-search/services/alma-investigator-search.service';
import {ProjectService} from '../../../../shared/services/project.service';
import {IInvestigator} from '../../../../shared/interfaces/apdm/investigator.interface';

/**
 * Initial PI search component
 */

@Component({
  selector: 'app-pi-search',
  templateUrl: './pi-search.component.html',
  styleUrls: ['./pi-search.component.css']
})

export class PiSearchComponent implements OnInit {

  /** Placeholder for the search input */
  INPUT_PLACEHOLDER = 'Enter Principal Investigator name';

  isLoading;
  pi: IInvestigator;

  constructor(private almaInvestigatorSearchService: AlmaInvestigatorSearchService,
              private projectService: ProjectService,
              private suiModalService: SuiModalService) {
  }

  ngOnInit() {
    this.projectService.loadedProposal.subscribe(result => {
      if (result) {
        this.pi = result.principalInvestigator;
      }
    });
  }

  // get pi(): IAlmaInvestigator {
  //   if (this.projectService.hasProposalLoaded()) {
  //     return this.projectService.loadedProposal.getValue().PrincipalInvestigator;
  //   } else {
  //     console.log('no pi');
  //   }
  //   // If no proposal, load investigator from project
  // }

  makeModal(piName: string) {
    this.suiModalService
      .open(new AlmaInvestigatorSearchModal(piName))
      .onApprove(result => {
        this.projectService.setPi(this.almaInvestigatorSearchService.selectedPi);
      })
      .onDeny(result => {
        console.log(result);
      });
  }
}
