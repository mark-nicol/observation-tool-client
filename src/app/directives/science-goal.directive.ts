import {Directive, ViewContainerRef} from "@angular/core";

@Directive({
  selector: '[science-goal-host]',
})

export class ScienceGoalDirective {
  constructor(public  viewContainerRef: ViewContainerRef) {}
}
