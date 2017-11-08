import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ScienceGoalComponent} from './science-goal.component';
import {GeneralComponent} from './components/general/general.component';
import {FieldSetupComponent} from '../field-setup/field-setup.component';
import {CalibrationSetupComponent} from './components/calibration-setup/calibration-setup.component';
import {ControlPerformanceComponent} from './components/control-performance/control-performance.component';
import {TechnicalJustificationComponent} from './components/technical-justification/technical-justification.component';
import {SpectralSetupComponent} from '../spectral-setup/spectral-setup.component';

const routes: Routes = [
  {
    path: '',
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
  },
  // {
  //   path: '',
  //   redirectTo: 'science-goals',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ScienceGoalRoutingModule {
}
