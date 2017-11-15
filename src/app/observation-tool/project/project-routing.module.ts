import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlannedObservingComponent} from './components/planned-observing/planned-observing.component';
import {ProposalComponent} from './components/proposal/proposal.component';
import {ProjectComponent} from './project.component';

const routes: Routes = [
  {
    path: 'project',
    component: ProjectComponent, // TODO Change to PI Select
    children: [
      {
        path: 'pi-select',
        loadChildren: '../pi-select/pi-select.module#PiSelectModule'
      },
      {
        path: 'proposal',
        component: ProposalComponent,
      },
      {
        path: 'planned-observing',
        component: PlannedObservingComponent,
      },
      {
        path: 'science-goals',
        loadChildren: '../science-goal/science-goal.module#ScienceGoalModule'
      },
      {
        path: '',
        redirectTo: 'pi-select',
        pathMatch: 'full'
      }
    ],
  },
  {
    path: '',
    redirectTo: 'project/pi-select',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProjectRoutingModule {
}
