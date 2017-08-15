import {Component, Input} from "@angular/core";
import {ScienceGoalComponent} from "./science-goal.component";

@Component({
  template: `
    <h4>{{data.title}}</h4>
    {{data.body}}
  `
})

export class FieldSetupComponent implements ScienceGoalComponent {
  @Input() data: any;
}
