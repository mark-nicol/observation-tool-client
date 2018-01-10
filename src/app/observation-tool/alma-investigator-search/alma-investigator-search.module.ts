import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from 'ng2-toastr';
import {SharedModule} from '../shared/shared.module';
import {AlmaInvestigatorSearchModalComponent} from './components/modal/modal.component';
import {RefinePanelComponent} from './components/refine-panel/refine-panel.component';
import {ResultsTableComponent} from './components/results-table/results-table.component';

@NgModule({
            imports: [
              BrowserAnimationsModule,
              SharedModule,
              HttpClientModule,
              ToastModule.forRoot(),
            ],
            declarations: [
              AlmaInvestigatorSearchModalComponent,
              RefinePanelComponent,
              ResultsTableComponent
            ],
            providers: [HttpClientModule],
            exports: [],
            entryComponents: [AlmaInvestigatorSearchModalComponent]
          })

export class AlmaInvestigatorSearchModule {
}
