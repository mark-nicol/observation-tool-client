import {Component, OnInit} from '@angular/core';
import {Page} from "../../../models/page";
import {ScienceGoalPanelService} from "../../../services/science-goal-panel.service";

// @Component({
//   selector: 'app-science-goal-page',
//   templateUrl: './science-goal-page.component.html',
//   styleUrls: ['./science-goal-page.component.scss'],
//   providers: [ScienceGoalPanelService]
// })
export abstract class ScienceGoalPageComponent implements OnInit {

  id: string;
  page: Page;

  constructor(private scienceGoalPanelService: ScienceGoalPanelService) {
    this.scienceGoalPanelService.getPage(this.id).subscribe(data => this.page = data);
  }

  ngOnInit() {
  }

  hiddenChange(event) {
    this.scienceGoalPanelService.hiddenChange(this.id, event);
  }

}
