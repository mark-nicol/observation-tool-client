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

import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SuiModule} from 'ng2-semantic-ui';
import {AlmaInvestigatorSearchModule} from '../alma-investigator-search/alma-investigator-search.module';
import {AlmaInvestigatorSearchService} from '../alma-investigator-search/services/alma-investigator-search.service';
import {ScienceGoalModule} from '../science-goal/science-goal.module';
import {ProjectService} from '../shared/services/project.service';
import {SharedModule} from '../shared/shared.module';
import {PiEntryComponent} from './components/pi-entry/pi-entry.component';
import {PiSearchComponent} from './components/pi-entry/pi-search/pi-search.component';
import {ProjectInfoComponent} from './components/pi-entry/project-info/project-info.component';
import {PlannedObservingComponent} from './components/planned-observing/planned-observing.component';
import {ProposalComponent} from './components/proposal/proposal.component';
import {ProjectRoutingModule} from './project-routing.module';
import {ProjectComponent} from './project.component';

@NgModule({
  imports: [
    AlmaInvestigatorSearchModule,
    SharedModule,
    FormsModule,
    ScienceGoalModule,
    ProjectRoutingModule,
    SuiModule,
    ReactiveFormsModule,
  ],
  declarations: [
    PlannedObservingComponent,
    ProjectComponent,
    ProposalComponent,
    PiEntryComponent,
    PiSearchComponent,
    ProjectInfoComponent
  ],
  providers: [
    AlmaInvestigatorSearchService,
    ProjectService
  ],
  exports: [
    ProjectComponent
  ]
})

export class ProjectModule {
}
