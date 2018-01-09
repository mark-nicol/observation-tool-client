import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {AlmaInvestigatorSearchModalComponent} from './components/modal/modal.component';
import {RefinePanelComponent} from './components/refine-panel/refine-panel.component';
import {ResultsTableComponent} from './components/results-table/results-table.component';

@NgModule({
            imports: [
              SharedModule,
              HttpClientModule
            ],
            declarations: [
              AlmaInvestigatorSearchModalComponent,
              RefinePanelComponent,
              ResultsTableComponent
            ],
            providers: [],
            exports: [],
            entryComponents: [AlmaInvestigatorSearchModalComponent]
          })

export class AlmaInvestigatorSearchModule {
}
