import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SuiModule} from 'ng2-semantic-ui';
import {PiSelectModule} from '../pi-select/pi-select.module';
import {ScienceGoalModule} from '../science-goal/science-goal.module';
import {SharedModule} from '../shared/shared.module';
import {PlannedObservingComponent} from './components/planned-observing/planned-observing.component';
import {ProposalComponent} from './components/proposal/proposal.component';
import {ProjectRoutingModule} from './project-routing.module';
import {ProjectComponent} from './project.component';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ScienceGoalModule,
    PiSelectModule,
    ProjectRoutingModule,
    SuiModule,
    ReactiveFormsModule,
  ],
  declarations: [
    PlannedObservingComponent,
    ProjectComponent,
    ProposalComponent,
  ],
  providers: [],
  exports: [
    ProjectComponent
  ]
})

export class ProjectModule {
}
