import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {StartComponent} from './observation-tool/shared/components/start/start.component';
import {PersistenceService} from './observation-tool/shared/services/persistence.service';

const routes: Routes = [
  {
    path: 'new-start',
    component: StartComponent
  },
  {
    path:         'project',
    loadChildren: './observation-tool/project/project.module#ProjectModule',
  },
  {
    path:         'science-goals',
    loadChildren: './observation-tool/science-goal/science-goal.module#ScienceGoalModule'
  },
  {
    path:       '',
    redirectTo: 'project',
    pathMatch:  'full'
  }
];

@NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
          })
export class AppRoutingModule {
}
