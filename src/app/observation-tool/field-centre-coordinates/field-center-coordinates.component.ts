import {Component} from '@angular/core';
import {FieldCentreCoordinatesInterface} from '../shared/interfaces/field-centre-coordinates.interface';
import {FieldSetupService} from '../../../../services/field-setup.service';

/**
 * Handles the Field Centre Coordinates component in the Field Setup
 */

@Component({
  selector: 'field-center-coordinates',
  templateUrl: './field-center-coordinates.component.html',
  styleUrls: ['./field-center-coordinates.component.css'],
})
export class FieldCenterCoordinatesComponent {

  /** The page data from the fieldSetupService */
  data: FieldCentreCoordinatesInterface;

  /** Field Setup Service to be used in HTML template */
  protected _fieldSetupService: FieldSetupService;

  /**
   * Sets _fieldSetupService and retrieves page data
   * @param fieldSetupService Injected service
   */
  constructor(private fieldSetupService: FieldSetupService) {
    this._fieldSetupService = fieldSetupService;
    fieldSetupService.getPageData('fieldCentreCoordinates').subscribe(res => this.data = res);
  }

  /**
   * Handles changes to the chosen coordinate type, sets new type in page data
   * @param newCoordType
   */
  changeCoordType(newCoordType: string) {
    this.data.coordType = newCoordType;
  }

}
