import {Component, Input} from '@angular/core';
import {PersistenceService} from '../../../shared/services/persistence.service';

/**
 * Individual Field Centre Coordinates component
 */

@Component({
  selector: 'fcc-individual',
  templateUrl: './fcc-individual.component.html',
  styleUrls: ['./fcc-individual.component.scss']
})
export class FccIndividualComponent {

  /** The selected radio button value from FieldCentreCoordinatesComponent */
  @Input() radioValue = 'relative';

  /** Units for the offset selection box */
  offsetUnits = [
    'mas',
    'arcsec',
    'arcmin',
    'deg',
    'rad'
  ];

  /** ScienceGoalPageInterface data for fields and table rows */
  data: any;

  /** Field Setup Service to be used in template */
  protected _persistenceService: PersistenceService;

  /**
   * Constructor
   *
   * Sets local _fieldSetupService from injected and retrieves page data from service
   * @param persistenceService The injected service
   */
  constructor(private persistenceService: PersistenceService) {
    this._persistenceService = persistenceService;
    this.persistenceService.getSource(0, 0).subscribe(res => this.data = res.fieldCentreCoordinates.individual);
  }

  /**
   * Adds a new row to the page data
   */
  addRow() {
    this.data.rows.push({lat: '0', lon: '0'});
  }

  /**
   * Removes the last row from the page data
   */
  removeRow() {
    this.data.rows.pop();
  }

  /**
   * Calls console log for use in HTML Template
   * @param message The message to display in the log
   */
  log(message: string | number) {
    console.log(message);
  }

}
