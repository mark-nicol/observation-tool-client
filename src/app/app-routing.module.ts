import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

const routes: Routes = [
  {
    path: 'project',
    loadChildren: './observation-tool/project/project.module#ProjectModule',
  },
  {
    path: '',
    redirectTo: 'project/pi-select',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
