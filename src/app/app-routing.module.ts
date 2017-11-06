import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {FieldSetupComponent} from './observation-tool/components/science-goals/field-setup/field-setup.component';
import {SourceComponent} from './observation-tool/components/science-goals/field-setup/source/source.component';
/* Components */
import {PiEntryComponent} from './observation-tool/components/pi-entry/pi-entry.component'
import {PiSelectComponent} from './observation-tool/components/pi-select/pi-select.component'
import {PlannedObservingComponent} from './observation-tool/components/planned-observing/planned-observing.component';
import {ProposalComponent} from './observation-tool/components/proposal/proposal.component';
import {ScienceGoalComponent} from './observation-tool/components/science-goals/science-goal.component';
import {GeneralComponent} from './observation-tool/components/science-goals/general/general.component';
import {SpectralSetupComponent} from './observation-tool/components/science-goals/spectral-setup/spectral-setup.component';
import {CalibrationSetupComponent} from './observation-tool/components/science-goals/calibration-setup/calibration-setup.component';
import {ControlPerformanceComponent} from './observation-tool/components/science-goals/control-performance/control-performance.component';
import {TechnicalJustificationComponent} from './observation-tool/components/science-goals/technical-justification/technical-justification.component';

const routes: Routes = [
  {
    path: 'pi-entry',
    component: PiEntryComponent,
    children: []
  },
  {
    path: 'pi-entry/:value',
    component: PiEntryComponent
  },
  {
    path: 'pi-select',
    component: PiSelectComponent
  },
  {
    path: 'pi-select/:value',
    component: PiSelectComponent
  },
  {
    path: 'project',
    component: SourceComponent
  },
  {
    path: 'proposal',
    component: ProposalComponent
  },
  {
    path: 'plannedObs',
    component: PlannedObservingComponent
  },
  {
    path: 'sciGoals',
    component: ScienceGoalComponent,
    children: [
      {
        path: '',
        redirectTo: 'general',
        pathMatch: 'full'
      },
      {
        path: 'general',
        component: GeneralComponent,
        outlet: 'scienceGoalOutlet'
      },
      {
        path: 'fieldSetup',
        component: FieldSetupComponent,
        outlet: 'scienceGoalOutlet'
      },
      {
        path: 'spectralSetup',
        component: SpectralSetupComponent,
        outlet: 'scienceGoalOutlet'
      },
      {
        path: 'calibrationSetup',
        component: CalibrationSetupComponent,
        outlet: 'scienceGoalOutlet'
      },
      {
        path: 'controlAndPerf',
        component: ControlPerformanceComponent,
        outlet: 'scienceGoalOutlet'
      },
      {
        path: 'techJust',
        component: TechnicalJustificationComponent,
        outlet: 'scienceGoalOutlet'
      },
    ]
  },
  {
    path: '',
    redirectTo: 'pi-entry',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
