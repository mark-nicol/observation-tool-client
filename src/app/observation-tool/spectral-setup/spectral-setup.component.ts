import {Component, OnInit, ViewChild} from '@angular/core';
import {ScienceGoalPage} from '../shared/classes/science-goal-page';
import {PersistenceService} from '../shared/services/persistence.service';
import {VisualisationViewerComponent} from './components/visualisation-viewer/visualisation-viewer.component';
import {ScienceGoalIdentifiers} from '../shared/enums/science-goal-identifiers.enum';

@Component({
  selector: 'app-spectral-setup',
  templateUrl: './spectral-setup.component.html',
  styleUrls: ['./spectral-setup.component.scss']
})
export class SpectralSetupComponent extends ScienceGoalPage implements OnInit {

  @ViewChild(VisualisationViewerComponent) private visualisationViewerComponent: VisualisationViewerComponent;

  constructor(persistenceService: PersistenceService) {
    super(persistenceService, ScienceGoalIdentifiers.SPECTRAL_SETUP);
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
      this.visualisationViewerComponent.changeLine(1);
    }
  }

  densitySelectorChange(event: number) {
    this.visualisationViewerComponent.changeLine(event);
  }

  resetClick() {
    this.visualisationViewerComponent.resetView();
  }

}
