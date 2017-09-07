import {NgModule} from "@angular/core"
import {RouterModule, Routes} from "@angular/router"
import {FieldSetupComponent} from "./components/science-goals/field-setup/field-setup.component";
import {SourceComponent} from "./components/science-goals/field-setup/source/source.component";
/* Components */
import {PiEntryComponent} from "./components/pi-entry/pi-entry.component"
import {PiSelectComponent} from "./components/pi-select/pi-select.component"
import {PlannedObservingComponent} from "./components/planned-observing/planned-observing.component";
import {ProposalComponent} from "./components/proposal/proposal.component";
import {ScienceGoalComponent} from "./components/science-goals/science-goal.component";
import {GeneralComponent} from "./components/science-goals/general/general.component";
import {SpectralSetupComponent} from "./components/science-goals/spectral-setup/spectral-setup.component";
import {CalibrationSetupComponent} from "./components/science-goals/calibration-setup/calibration-setup.component";
import {ControlContainer} from "@angular/forms";
import {ControlPerformanceComponent} from "./components/science-goals/control-performance/control-performance.component";
import {TechnicalJustificationComponent} from "./components/science-goals/technical-justification/technical-justification.component";

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
        path: 'control',
        component: ControlPerformanceComponent,
        outlet: 'scienceGoalOutlet'
      },
      {
        path: 'technicalJustification',
        component: TechnicalJustificationComponent,
        outlet: 'scienceGoalOutlet'
      },
      {
        path: '',
        redirectTo: 'general',
        pathMatch: 'full'
      }
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
