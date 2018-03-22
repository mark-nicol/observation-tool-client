import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FieldSetupModule} from '../field-setup/field-setup.module';
import {SharedModule} from '../shared/shared.module';
import {SpectralSetupModule} from '../spectral-setup/spectral-setup.module';
import {CalibrationSetupComponent} from './components/calibration-setup/calibration-setup.component';
import {ControlPerformanceComponent} from './components/control-performance/control-performance.component';
import {GeneralComponent} from './components/general/general.component';
import {TechnicalJustificationComponent} from './components/technical-justification/technical-justification.component';
import {ScienceGoalRoutingModule} from './science-goal-routing.module';
import {ScienceGoalComponent} from './science-goal.component';

@NgModule({
  imports: [
    FieldSetupModule,
    SharedModule,
    SpectralSetupModule,
    ScienceGoalRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    CalibrationSetupComponent,
    ControlPerformanceComponent,
    GeneralComponent,
    TechnicalJustificationComponent,
    ScienceGoalComponent,
  ],
  providers: [],
  exports: [
    ScienceGoalComponent
  ]
})

export class ScienceGoalModule {
}
