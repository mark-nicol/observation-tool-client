import {Component, OnInit, ViewChild} from "@angular/core";
import {ScienceGoalItem} from "./science-goal-item";
import {ScienceGoalService} from "../../services/science-goal.service";
import {FieldSetupComponent} from "./field-setup.component";
import {ScienceGoalLoaderComponent} from "./science-goal-loader.component";

@Component({
  selector: 'science-goal-controller',
  template: `
    <h4>I'm the controller</h4>
    <button class="btn btn-success" (click)="addScienceGoal()">Add Goal</button>
    <science-goal-loader [scienceGoals]="scienceGoals"></science-goal-loader>
  `,
  providers: [ScienceGoalService]
})

export class ScienceGoalControllerComponent implements OnInit {

  @ViewChild(ScienceGoalLoaderComponent) scienceGoalLoader;
  scienceGoals: ScienceGoalItem[];
  scienceGoalCount: number;

  constructor(private scienceGoalService: ScienceGoalService) {
  }

  ngOnInit() {
    this.scienceGoals = this.scienceGoalService.getScienceGoals();
    this.scienceGoalCount = this.scienceGoals.length;
  }

  addScienceGoal() {
    this.scienceGoalService.addScienceGoal(FieldSetupComponent, {
      title: 'Field Setup',
      body: 'Science Goal ' + (this.scienceGoalCount + 1)
    });
    this.scienceGoalCount ++;
    this.scienceGoals = this.scienceGoalService.getScienceGoals();
    this.scienceGoalLoader.loadComponent(this.scienceGoalCount - 1);
  }

}
