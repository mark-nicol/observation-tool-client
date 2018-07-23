/*
 * ALMA - Atacama Large Millimeter Array
 * Copyright (c) UKATC - UK Astronomy Technology Centre, Science and Technology Facilities Council, 2018
 * (in the framework of the ALMA collaboration).
 * All rights reserved.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307  USA
 */

import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ProjectService} from '../shared/services/project.service';
import {VisualisationViewerComponent} from './components/visualisation-viewer/visualisation-viewer.component';
import {SpectralDataService} from './services/spectral-data.service';

/**
 * Host component for the spectral setup
 *
 * Facilitates communication between the spectral control and visualiser components
 */

@Component({
  selector: 'app-spectral-setup',
  templateUrl: './spectral-setup.component.html',
  styleUrls: ['./spectral-setup.component.css']
})
export class SpectralSetupComponent implements OnInit {

  /** The visualisation viewer component */
  @ViewChild(VisualisationViewerComponent) private visualisationViewerComponent: VisualisationViewerComponent;

  lineSelecting = false;

  /**
   * Constructor
   * @param persistenceService Injected service sent to super class
   * @param spectralDataService
   */
  constructor(private persistenceService: ProjectService,
              private spectralDataService: SpectralDataService) {

  }

  ngOnInit() {

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
