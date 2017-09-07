import {NgModule} from "@angular/core"
import {RouterModule, Routes} from "@angular/router"
import {SourceComponent} from "./components/field-setup/source/source.component";
/* Components */
import {PiEntryComponent} from "./components/pi-entry/pi-entry.component"
import {PiSelectComponent} from "./components/pi-select/pi-select.component"
import {PlannedObservingComponent} from "./components/planned-observing/planned-observing.component";
import {ProposalComponent} from "./components/proposal/proposal.component";
import {ScienceGoalComponent} from "./components/science-goals/science-goal.component";
import {FieldSetupComponent} from "./components/field-setup/field-setup.component";

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
      path: 'fieldSetup',
      component: FieldSetupComponent,
      outlet: 'scienceGoalOutlet'
    },]
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
