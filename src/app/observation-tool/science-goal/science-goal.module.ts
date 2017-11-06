import {NgModule} from '@angular/core';
import {CalibrationSetupComponent} from './components/calibration-setup/calibration-setup.component';
import {ControlPerformanceComponent} from './components/control-performance/control-performance.component';
import {GeneralComponent} from './components/general/general.component';
import {ScienceGoalComponent} from './components/science-goal/science-goal.component';
import {TechnicalJustificationComponent} from './components/technical-justification/technical-justification.component';
import {ScienceGoalRoutingModule} from './science-goal-routing.module';
import {ScienceGoalPageService} from './services/science-goal-page.service';

@NgModule({
  imports: [
    ScienceGoalRoutingModule
  ],
  declarations: [
    CalibrationSetupComponent,
    ControlPerformanceComponent,
    GeneralComponent,
    TechnicalJustificationComponent,
    ScienceGoalComponent,
  ],
  providers: [ScienceGoalPageService],
  exports: [ScienceGoalComponent]
})

export class ScienceGoalModule {
}
