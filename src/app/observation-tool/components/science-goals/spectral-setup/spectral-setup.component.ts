import {Component, OnInit, ViewChild} from '@angular/core';
import {ScienceGoalPanelService} from "../../../services/science-goal-panel.service";
import {ScienceGoalPage} from "../../../models/science-goal-page";
import {VisualisationViewerComponent} from './visualisation-viewer/visualisation-viewer.component';

@Component({
  selector: 'app-spectral-setup',
  templateUrl: './spectral-setup.component.html',
  styleUrls: ['./spectral-setup.component.scss']
})
export class SpectralSetupComponent extends ScienceGoalPage implements OnInit {

  @ViewChild(VisualisationViewerComponent) private visualisationViewerComponent: VisualisationViewerComponent;

  constructor(scienceGoalPanelService: ScienceGoalPanelService) {
    super(scienceGoalPanelService, 'spectralSetup');
  }

  ngOnInit() {
  }

  bandsCheckedChange(event: boolean) {
    console.log('bands checked =', event);
    this.visualisationViewerComponent.hideShowBands(event);
  }

  transmissionCheckedChange(event: boolean) {
    console.log('trans checked =', event);
    this.visualisationViewerComponent.hideShowTransmission(event);
  }

}
