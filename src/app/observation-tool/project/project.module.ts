import {NgModule} from '@angular/core';
import {PlannedObservingComponent} from './components/planned-observing/planned-observing.component';
import {ProjectComponent} from './components/project/project.component';
import {ProposalComponent} from './components/proposal/proposal.component';

@NgModule({
  imports: [],
  declarations: [
    ProjectComponent,
    ProposalComponent,
    PlannedObservingComponent
  ],
  providers: [],
  exports: [
    ProjectComponent,
    ProposalComponent,
    PlannedObservingComponent
  ]
})

export class ProjectModule {
}
