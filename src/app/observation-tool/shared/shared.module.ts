import {NgModule} from '@angular/core';
import {ModularPanelComponent} from './components/modular-panel/modular-panel.component';
import {DelayTooltipDirective} from './directives/delay-tooltip.directive';
import {DegreesPipe} from './pipes/degrees.pipe';
import {SexagesimalPipe} from './pipes/sexagesimal.pipe';
import {SystemSelectorComponent} from './components/system-selector/system-selector.component';
import {CommonModule} from '@angular/common';
import {UnitsModule} from '../../units/units.module';

@NgModule({
  imports: [CommonModule, UnitsModule],
  declarations: [
    ModularPanelComponent,
    DelayTooltipDirective,
    DegreesPipe,
    SexagesimalPipe,
    SystemSelectorComponent
  ],
  providers: [],
  exports: [
    UnitsModule,
    CommonModule,
    ModularPanelComponent,
    DelayTooltipDirective,
    DegreesPipe,
    SexagesimalPipe,
    SystemSelectorComponent
  ]
})

export class SharedModule {
}
