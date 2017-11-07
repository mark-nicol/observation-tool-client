import {NgModule} from '@angular/core';
import {PiEntryComponent} from './components/pi-entry/pi-entry.component';
import {PiSearchComponent} from './components/pi-entry/pi-search/pi-search.component';
import {ProjectInfoComponent} from './components/pi-entry/project-info/project-info.component';
import {PiSelectComponent} from './components/pi-select/pi-select.component';
import {RefinePanelComponent} from './components/pi-select/refine-panel/refine-panel.component';
import {ResultsTableComponent} from './components/pi-select/results-table/results-table.component';
import {PrimaryInvestigatorService} from './services/primary-investigator.service';

@NgModule({
  declarations: [
    PiEntryComponent,
    PiSearchComponent,
    PiSelectComponent,
    ProjectInfoComponent,
    RefinePanelComponent,
    ResultsTableComponent,
  ],
  providers: [PrimaryInvestigatorService],
  exports: [
    PiEntryComponent,
    PiSelectComponent
  ]
})

export class PiSelectModule { }
