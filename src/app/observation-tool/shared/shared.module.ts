import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {UnitsModule} from '../../units/units.module';
import {ModularPanelComponent} from './components/modular-panel/modular-panel.component';
import {SystemSelectorComponent} from './components/system-selector/system-selector.component';
import {DelayTooltipDirective} from './directives/delay-tooltip.directive';
import {DegreesPipe} from './pipes/degrees.pipe';
import {SexagesimalPipe} from './pipes/sexagesimal.pipe';
import {PersistenceService} from './services/persistence.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
  ],
  exports: [
    CommonModule,
    FormsModule,
    UnitsModule,
    ModularPanelComponent,
    SystemSelectorComponent,
    DelayTooltipDirective,
    DegreesPipe,
    SexagesimalPipe,
    PersistenceService,
  ]
})

export class SharedModule {
}
