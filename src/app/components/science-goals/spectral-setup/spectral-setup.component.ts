import { Component, OnInit } from '@angular/core';
import {ScienceGoalPanelService} from "../../../services/science-goal-panel.service";
import {ScienceGoalPageComponent} from "../science-goal-page/science-goal-page.component";

@Component({
  selector: 'app-spectral-setup',
  templateUrl: './spectral-setup.component.html',
  styleUrls: ['./spectral-setup.component.scss']
})
export class SpectralSetupComponent extends ScienceGoalPageComponent implements OnInit {

  constructor(scienceGoalPanelService: ScienceGoalPanelService) {
    super(scienceGoalPanelService, 'spectralSetup');
  }

  ngOnInit() {
  }

}
