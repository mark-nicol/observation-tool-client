import {Component, OnInit} from "@angular/core";
import {ScienceGoalItem} from "./science-goal-item";
import {ScienceGoalService} from "../services/science-goal.service";

@Component({
  selector: 'science-goal-controller',
  template: `
    <science-goal-loader [scienceGoals]="scienceGoals"></science-goal-loader>
  `,
  providers: [ScienceGoalService]
})

export class ScienceGoalControllerComponent implements OnInit {
  scienceGoals: ScienceGoalItem[];

  constructor(private scienceGoalService: ScienceGoalService) { }

  ngOnInit() {
    this.scienceGoals = this.scienceGoalService.getScienceGoals();
  }
}
