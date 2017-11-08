import {Component} from '@angular/core';
import {FieldCentreCoordinatesInterface} from '../shared/interfaces/field-centre-coordinates.interface';
import {PersistenceService} from '../shared/services/persistence.service';

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
  protected _persistenceService: PersistenceService;

  /**
   * Sets _fieldSetupService and retrieves page data
   * @param persistenceService Injected service
   */
  constructor(private persistenceService: PersistenceService) {
    this._persistenceService = persistenceService;
    persistenceService.getPanelData('field-setup', 'field-centre').subscribe(res => this.data = res);
  }

  /**
   * Handles changes to the chosen coordinate type, sets new type in page data
   * @param newCoordType
   */
  changeCoordType(newCoordType: string) {
    this.data.coordType = newCoordType;
  }

}
