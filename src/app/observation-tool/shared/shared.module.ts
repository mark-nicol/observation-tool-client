import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UnitsModule} from '../../units/units.module';
import {ModularPanelComponent} from './components/modular-panel/modular-panel.component';
import {SystemSelectorComponent} from './components/system-selector/system-selector.component';
import {DelayTooltipDirective} from './directives/delay-tooltip.directive';
import {DegreesPipe} from './pipes/degrees.pipe';
import {SexagesimalPipe} from './pipes/sexagesimal.pipe';
import {PersistenceService} from './services/persistence.service';
import {SuiModule} from 'ng2-semantic-ui';
import {SystemService} from './services/system.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule,
    SuiModule,
    UnitsModule,
  ],
  declarations: [
    ModularPanelComponent,
    DelayTooltipDirective,
    DegreesPipe,
    SexagesimalPipe,
    SystemSelectorComponent,
  ],
  providers: [
    PersistenceService,
    SystemService
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    UnitsModule,
    ModularPanelComponent,
    SystemSelectorComponent,
    DelayTooltipDirective,
    DegreesPipe,
    SexagesimalPipe,
    SuiModule,
  ]
})

export class SharedModule {
}
