import { Component, OnInit } from '@angular/core';
import {ScienceGoalPanelService} from "../../../services/science-goal-panel.service";

@Component({
  selector: 'app-spectral-setup',
  templateUrl: './spectral-setup.component.html',
  styleUrls: ['./spectral-setup.component.scss']
})
export class SpectralSetupComponent implements OnInit {

  page: any;

  constructor(private scienceGoalPanelService: ScienceGoalPanelService) {
    this.scienceGoalPanelService.getPage('spectralSetup').subscribe(data => this.page = data);
  }

  ngOnInit() {
  }

}
