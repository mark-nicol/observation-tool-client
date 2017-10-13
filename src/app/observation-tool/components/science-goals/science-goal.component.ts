import {Component, OnInit} from '@angular/core';
import {ScienceGoalPanelService} from "../../services/science-goal-panel.service";
import {Observable} from "rxjs/Observable";
import {Page} from "../../models/page";

@Component({
  selector: 'app-science-goal',
  templateUrl: './science-goal.component.html',
  styleUrls: ['./science-goal.component.scss']
})
export class ScienceGoalComponent implements OnInit {

  selectedPage: string = 'general';
  pages: { [id: string]: Page };
  pageKeys = Object.keys;

  constructor(private scienceGoalPanelService: ScienceGoalPanelService) {
  }

  ngOnInit() {
    this.scienceGoalPanelService.pages.subscribe(data => this.pages = data);
  }

  hiddenChange(event) {
    this.scienceGoalPanelService.hiddenChange(this.selectedPage, event);
  }

}
