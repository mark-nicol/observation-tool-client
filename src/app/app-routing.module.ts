import {NgModule} from "@angular/core"
import {RouterModule, Routes} from "@angular/router"
/* Components */
import {PiEntryComponent} from "./components/pi-entry/pi-entry.component"
import {PiSelectComponent} from "./components/pi-select/pi-select.component"
import {PlannedObservingComponent} from "./components/planned-observing/planned-observing.component";
import {ProjectComponent} from "./components/project/project.component";
import {ProposalComponent} from "./components/proposal/proposal.component";
import {FieldSetupComponent} from "./components/field-setup/field-setup.component";
import {SourceComponent} from "./components/field-setup/source/source.component";

const routes: Routes = [
  {
    path: 'pi-entry',
    component: PiEntryComponent,
    children: []
  },
  {
    path: 'pi-entry/:value',
    component: PiEntryComponent,
    children: []
  },
  {
    path: 'pi-select',
    component: PiSelectComponent,
    children: []
  },
  {
    path: 'pi-select/:value',
    component: PiSelectComponent,
    children: []
  },
  {
    path: 'project',
    component: SourceComponent,
    children: []
  },
  {
    path: 'proposal',
    component: ProposalComponent,
    children: []
  },
  {
    path: 'plannedObs',
    component: PlannedObservingComponent,
    children: []
  },
  {
    path: 'sciGoals',
    component: FieldSetupComponent,
    children: []
  },
  {
    path: '',
    redirectTo: '/pi-entry',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
