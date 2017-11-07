import {NgModule} from '@angular/core';
import {PiEntryComponent} from './components/pi-entry/pi-entry.component';
import {PiSearchComponent} from './components/pi-entry/pi-search/pi-search.component';
import {PiSelectComponent} from './components/pi-select/pi-select.component';
import {RefinePanelComponent} from './components/pi-select/refine-panel/refine-panel.component';
import {ResultsTableComponent} from './components/pi-select/results-table/results-table.component';
import {PiSelectRoutingModule} from './pi-select-routing.module';
import {PrimaryInvestigatorService} from './services/primary-investigator.service';

@NgModule({
  imports: [
    PiSelectRoutingModule,
  ],
  declarations: [
    PiEntryComponent,
    PiSearchComponent,
    PiSelectComponent,
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

export class PiSelectModule { }
