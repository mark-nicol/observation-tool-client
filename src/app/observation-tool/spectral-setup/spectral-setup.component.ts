import {Component, ViewChild} from '@angular/core';
import {PersistenceService} from '../shared/services/persistence.service';
import {VisualisationViewerComponent} from './components/visualisation-viewer/visualisation-viewer.component';

/**
 * Host component for the spectral setup
 *
 * Facilitates communication between the spectral control and visualiser components
 */

@Component({
  selector: 'app-spectral-setup',
  templateUrl: './spectral-setup.component.html',
  styleUrls: ['./spectral-setup.component.scss']
})
export class SpectralSetupComponent {

  /** The visualisation viewer component */
  @ViewChild(VisualisationViewerComponent) private visualisationViewerComponent: VisualisationViewerComponent;

  lineSelecting = true;

  /**
   * Constructor
   * @param persistenceService Injected service sent to super class
   */
  constructor(private persistenceService: PersistenceService) {

  }

  /**
   * Sends the hide/show receiver bands signal to the visualiser
   * @param show Whether the bands are shown or not
   */
  bandsCheckedChange(show: boolean) {
    this.visualisationViewerComponent.hideShowBands(show);
  }

  /**
   * Sends the hide/show transmission line signal to the visualiser
   * @param show Whether the line is shown or not
   */
  transmissionCheckedChange(show: boolean) {
    this.visualisationViewerComponent.hideShowTransmission(show);
  }

  spectralLineCheckedChange(show: boolean) {
    this.visualisationViewerComponent.hideShowSpectralLine(show);
  }

  /**
   * Sends a signal to the visualiser when the density radio is changed, if automatic reverts to 1st octile
   * @param option The chosen radio option
   */
  densityRadioChange(option: string) {
    if (option === 'automatic') {
      this.visualisationViewerComponent.changeLine(1);
    }
  }

  /**
   * Sends a signal to the visualiser when the chosen octile is changed
   * @param option The chosen octile index
   */
  densitySelectorChange(option: number) {
    this.visualisationViewerComponent.changeLine(option);
  }

  /**
   * Signals the visualiser when the reset button is clicked
   */
  resetClick() {
    this.visualisationViewerComponent.resetView();
  }

}
