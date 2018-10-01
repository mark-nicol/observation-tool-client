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

import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from '../shared/shared.module';
import {AlmaInvestigatorSearchModalComponent} from './components/modal/modal.component';
import {RefinePanelComponent} from './components/refine-panel/refine-panel.component';
import {ResultsTableComponent} from './components/results-table/results-table.component';

@NgModule({
            imports: [
              BrowserAnimationsModule,
              SharedModule,
              HttpClientModule,
            ],
            declarations: [
              AlmaInvestigatorSearchModalComponent,
              RefinePanelComponent,
              ResultsTableComponent
            ],
            providers: [HttpClientModule],
            exports: [],
            entryComponents: [AlmaInvestigatorSearchModalComponent]
          })

export class AlmaInvestigatorSearchModule {
}
