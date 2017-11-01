import {Component, Input} from '@angular/core';
import {FieldSetupService} from '../../../../../services/field-setup.service';

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
  /** Page data for fields and table rows */
  data: any;
  /** Field Setup Service to be used in template */
  protected _fieldSetupService: FieldSetupService;

  /**
   * Constructor
   *
   * Sets local _fieldSetupService from injected and retrieves page data from service
   * @param fieldSetupService The injected service
   */
  constructor(private fieldSetupService: FieldSetupService) {
    this._fieldSetupService = fieldSetupService;
    fieldSetupService.getPageData('fieldCentreCoordinates').subscribe(res => this.data = res.individual);
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
