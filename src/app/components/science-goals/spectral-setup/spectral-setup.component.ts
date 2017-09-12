import { Component, OnInit } from '@angular/core';
import {ScienceGoalPanelService} from "../../../services/science-goal-panel.service";

@Component({
  selector: 'app-spectral-setup',
  templateUrl: './spectral-setup.component.html',
  styleUrls: ['./spectral-setup.component.scss']
})
export class SpectralSetupComponent implements OnInit {

  panels: any;

  constructor(private scienceGoalPanelService: ScienceGoalPanelService) {
    this.panels = scienceGoalPanelService.getPage('spectralSetup');
  }

  ngOnInit() {
  }

}
