import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[panel-host]'
})
export class PanelHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
