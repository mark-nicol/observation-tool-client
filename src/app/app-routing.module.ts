import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

const routes: Routes = [
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
