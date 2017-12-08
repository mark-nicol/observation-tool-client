import {Component} from '@angular/core';
import {FieldCentreCoordinatesInterface} from '../shared/interfaces/science-goal-interfaces/field-setup-interfaces/field-centre-coordinates.interface';
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

  targetType: string;

  /** Field Setup Service to be used in HTML template */
  protected _persistenceService: PersistenceService;

  /**
   * Sets _fieldSetupService and retrieves page data
   * @param persistenceService Injected service
   */
  constructor(private persistenceService: PersistenceService) {
    this._persistenceService = persistenceService;
    this.persistenceService.getSource(0, 0)
      .subscribe(res => {
        this.data = res.fieldCentreCoordinates;
        this.targetType = res.targetType;
      });
  }

  /**
   * Handles changes to the chosen coordinate type, sets new type in page data
   * @param newCoordType
   */
  changeCoordType(newCoordType: string) {
    this.data.coordType = newCoordType;
  }

  checkTargetType() {
    console.log(this.targetType);
    return 'individual';
  }

}
