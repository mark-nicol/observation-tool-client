import {Component, OnInit, ViewChild} from '@angular/core';
import {ScienceGoalPage} from '../shared/classes/science-goal-page';
import {PersistenceService} from '../shared/services/persistence.service';
import {VisualisationViewerComponent} from './components/visualisation-viewer/visualisation-viewer.component';

@Component({
  selector: 'app-spectral-setup',
  templateUrl: './spectral-setup.component.html',
  styleUrls: ['./spectral-setup.component.scss']
})
export class SpectralSetupComponent extends ScienceGoalPage implements OnInit {

  @ViewChild(VisualisationViewerComponent) private visualisationViewerComponent: VisualisationViewerComponent;

  constructor(persistenceService: PersistenceService) {
    super(persistenceService, 'spectralSetup');
  }

  ngOnInit() {
  }

  bandsCheckedChange(event: boolean) {
    this.visualisationViewerComponent.hideShowBands(event);
  }

  transmissionCheckedChange(event: boolean) {
    this.visualisationViewerComponent.hideShowTransmission(event);
  }

  densityRadioChange(event: string) {
    if (event === 'automatic') {
      this.visualisationViewerComponent.changeLine('sin');
    }
  }

  densitySelectorChange(event: string) {
    this.visualisationViewerComponent.changeLine(event);
  }

}
