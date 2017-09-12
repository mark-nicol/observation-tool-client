import { Component, OnInit } from '@angular/core';
import {ScienceGoalPanelService} from "../../services/science-goal-panel.service";

@Component({
  selector: 'app-science-goal',
  templateUrl: './science-goal.component.html',
  styleUrls: ['./science-goal.component.scss']
})
export class ScienceGoalComponent implements OnInit {

  selectedPage: string ='general';
  pages: any;
  pageKeys = Object.keys;

  constructor(private scienceGoalPanelService: ScienceGoalPanelService) {
    this.pages = this.scienceGoalPanelService.pages;
  }

  ngOnInit() {
  }

}
