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
import {RouterModule, Routes} from '@angular/router';
import {FieldSetupComponent} from '../field-setup/field-setup.component';
import {SpectralSetupComponent} from '../spectral-setup/spectral-setup.component';
import {CalibrationSetupComponent} from './components/calibration-setup/calibration-setup.component';
import {ControlPerformanceComponent} from './components/control-performance/control-performance.component';
import {GeneralComponent} from './components/general/general.component';
import {TechnicalJustificationComponent} from './components/technical-justification/technical-justification.component';
import {ScienceGoalComponent} from './science-goal.component';
import {ProjectService} from '../shared/services/project.service';

const routes: Routes = [
  {
    path: 'science-goals',
    canActivate: [ProjectService],
    component: ScienceGoalComponent,
    children: [
      {
        path: 'general',
        component: GeneralComponent,
      },
      {
        path: 'field-setup',
        component: FieldSetupComponent,
      },
      {
        path: 'spectral-setup',
        component: SpectralSetupComponent,
      },
      {
        path: 'calibration-setup',
        component: CalibrationSetupComponent,
      },
      {
        path: 'control-performance',
        component: ControlPerformanceComponent,
      },
      {
        path: 'technical-justification',
        component: TechnicalJustificationComponent,
      },
      {
        path: '',
        redirectTo: 'general',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ScienceGoalRoutingModule {
}
