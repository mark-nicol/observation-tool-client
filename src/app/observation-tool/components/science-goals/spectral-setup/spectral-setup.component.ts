import { Component, OnInit } from '@angular/core';
import {ScienceGoalPanelService} from "../../../services/science-goal-panel.service";
import {ScienceGoalPage} from "../../../models/science-goal-page";

@Component({
  selector: 'app-spectral-setup',
  templateUrl: './spectral-setup.component.html',
  styleUrls: ['./spectral-setup.component.scss']
})
export class SpectralSetupComponent extends ScienceGoalPage implements OnInit {

  constructor(scienceGoalPanelService: ScienceGoalPanelService) {
    super(scienceGoalPanelService, 'spectralSetup');
  }

  ngOnInit() {
  }

}
