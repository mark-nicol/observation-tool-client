import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ScienceGoalComponent} from './science-goal.component';

const routes: Routes = [
  {path: '', component: ScienceGoalComponent, children: []}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ScienceGoalRoutingModule {
}
