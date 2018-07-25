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

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {UnitsModule} from '../../units/units.module';
import {DegreesPipe} from './pipes/degrees.pipe';
import {SexagesimalPipe} from './pipes/sexagesimal.pipe';
import {ProjectService} from './services/project.service';
import {SuiModule} from 'ng2-semantic-ui';
import {SimbadService} from './services/simbad.service';
import {SystemService} from './services/system.service';
import {ProjectImportComponent} from './components/project-import/project-import.component';
import { ProjectImportModalComponent } from './components/project-import-modal/project-import-modal.component';
import {StartComponent} from './components/start/start.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SuiModule,
    UnitsModule,
  ],
  declarations: [
    DegreesPipe,
    SexagesimalPipe,
    ProjectImportComponent,
    ProjectImportModalComponent,
    StartComponent
  ],
  providers: [
    ProjectService,
    SystemService,
    SimbadService
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    UnitsModule,
    StartComponent,
    DegreesPipe,
    ProjectImportComponent,
    SexagesimalPipe,
    SuiModule,
  ],
  entryComponents: [ProjectImportModalComponent]
})

export class SharedModule {
}
