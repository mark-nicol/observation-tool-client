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
