import {AfterViewInit, Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from "@angular/core";
import {ScienceGoalDirective} from "../../directives/science-goal.directive";
import {ScienceGoalItem} from "./science-goal-item";
import {ScienceGoalComponent} from "./science-goal.component";

@Component({
  selector: 'science-goal-loader',
  template: `
    <h4>I'm the loader</h4>
    <ng-template science-goal-host></ng-template>`
})

export class ScienceGoalLoaderComponent implements AfterViewInit, OnInit {

  @Input() scienceGoals: ScienceGoalItem[];
  @ViewChild(ScienceGoalDirective) scienceGoalHost: ScienceGoalDirective;
  subscription: any;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.loadComponents();
  }

  ngAfterViewInit() {

  }

  loadComponent(index: number) {
    let scienceGoalItem = this.scienceGoals[index];
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(scienceGoalItem.component);
    let componentRef = this.scienceGoalHost.viewContainerRef.createComponent(componentFactory);
    (<ScienceGoalComponent>componentRef.instance).data = scienceGoalItem.data;
  }

  loadComponents() {
    for (let i = 0; i < this.scienceGoals.length; i++) {
      this.loadComponent(i);
    }
  }

}
