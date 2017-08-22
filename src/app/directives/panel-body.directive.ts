import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[panel-body]'
})
export class PanelBodyDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
