import {NgModule} from '@angular/core';
import {ModularPanelComponent} from './components/modular-panel/modular-panel.component';
import {DelayTooltipDirective} from './directives/delay-tooltip.directive';
import {DegreesPipe} from './pipes/degrees.pipe';
import {SexagesimalPipe} from './pipes/sexagesimal.pipe';

@NgModule({
  imports: [],
  declarations: [
    ModularPanelComponent,
    DelayTooltipDirective,
    DegreesPipe,
    SexagesimalPipe
  ],
  providers: [],
  exports: [
    ModularPanelComponent,
    DelayTooltipDirective,
    DegreesPipe,
    SexagesimalPipe
  ]
})

export class SharedModule {
}
