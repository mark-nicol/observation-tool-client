import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {SharedModule} from '../shared/shared.module';
import {PiEntryComponent} from './components/pi-entry/pi-entry.component';
import {PiSearchComponent} from './components/pi-entry/pi-search/pi-search.component';
import {ProjectInfoComponent} from './components/pi-entry/project-info/project-info.component';
import {PiResultsComponent} from './components/pi-results/pi-results.component';
import {RefinePanelComponent} from './components/pi-results/refine-panel/refine-panel.component';
import {ResultsTableComponent} from './components/pi-results/results-table/results-table.component';
import {PiSelectRoutingModule} from './pi-select-routing.module';
import {PiSelectComponent} from './pi-select.component';
import {PrimaryInvestigatorService} from './services/primary-investigator.service';

@NgModule({
  imports: [
    PiSelectRoutingModule,
    SharedModule,
    HttpModule
  ],
  declarations: [
    PiEntryComponent,
    PiResultsComponent,
    PiSearchComponent,
    PiSelectComponent,
    ProjectInfoComponent,
    RefinePanelComponent,
    ResultsTableComponent,
  ],
  providers: [
    PrimaryInvestigatorService
  ],
  exports: [
    PiSelectComponent
  ]
})

export class PiSelectModule {
}
