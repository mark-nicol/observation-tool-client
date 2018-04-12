import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SuiModule} from 'ng2-semantic-ui';
import {ToastModule} from 'ng2-toastr';
import {AlmaInvestigatorSearchModule} from '../alma-investigator-search/alma-investigator-search.module';
import {AlmaInvestigatorSearchService} from '../alma-investigator-search/services/alma-investigator-search.service';
import {ScienceGoalModule} from '../science-goal/science-goal.module';
import {PersistenceService} from '../shared/services/persistence.service';
import {SharedModule} from '../shared/shared.module';
import {PiEntryComponent} from './components/pi-entry/pi-entry.component';
import {PiSearchComponent} from './components/pi-entry/pi-search/pi-search.component';
import {ProjectInfoComponent} from './components/pi-entry/project-info/project-info.component';
import {PlannedObservingComponent} from './components/planned-observing/planned-observing.component';
import {ProposalComponent} from './components/proposal/proposal.component';
import {ProjectRoutingModule} from './project-routing.module';
import {ProjectComponent} from './project.component';

@NgModule({
  imports: [
    AlmaInvestigatorSearchModule,
    SharedModule,
    FormsModule,
    ScienceGoalModule,
    ProjectRoutingModule,
    SuiModule,
    ReactiveFormsModule,
    ToastModule.forRoot(),
  ],
  declarations: [
    PlannedObservingComponent,
    ProjectComponent,
    ProposalComponent,
    PiEntryComponent,
    PiSearchComponent,
    ProjectInfoComponent
  ],
  providers: [
    AlmaInvestigatorSearchService,
    PersistenceService
  ],
  exports: [
    ProjectComponent
  ]
})

export class ProjectModule {
}
