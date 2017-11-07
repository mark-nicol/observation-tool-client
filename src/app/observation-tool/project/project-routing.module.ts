import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProposalComponent} from './components/proposal/proposal.component';
import {ProjectComponent} from './project.component';
import {PlannedObservingComponent} from './components/planned-observing/planned-observing.component';

const routes: Routes = [
  {
    path: 'project',
    component: ProjectComponent,
    children: [],
  },
  {
    path: 'proposal',
    component: ProposalComponent,
    children: [],
  },
  {
    path: 'planned-observing',
    component: PlannedObservingComponent,
    children: [],
  },
  {
    // path: 'science-goals',
    // loadChildren: 'project/science-goal.module#ScienceGoalModule'
  },
  {
    path: '',
    redirectTo: 'project',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProjectRoutingModule { }
