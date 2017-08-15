import {AfterViewInit, Component, ComponentFactoryResolver, Input, ViewChild} from "@angular/core";
import {ScienceGoalDirective} from "../directives/science-goal.directive";
import {ScienceGoalItem} from "./science-goal-item";
import {ScienceGoalComponent} from "./science-goal.component";

@Component({
  selector: 'science-goal-loader',
  template: '<ng-template science-goal-host></ng-template>'
})

export class ScienceGoalLoaderComponent implements AfterViewInit {
  @Input() scienceGoals: ScienceGoalItem[];
  currentScienceGoalIndex: number = -1;
  @ViewChild(ScienceGoalDirective) scienceGoalHost: ScienceGoalDirective;
  subscription: any;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit() {
    this.loadComponent();
  }

  loadComponent() {
    this.currentScienceGoalIndex = (this.currentScienceGoalIndex + 1) % this.scienceGoals.length;
    let scienceGoalItem = this.scienceGoals[this.currentScienceGoalIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(scienceGoalItem.component);

    let viewContainerRef = this.scienceGoalHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<ScienceGoalComponent>componentRef.instance).data = scienceGoalItem.data;

  }

}
