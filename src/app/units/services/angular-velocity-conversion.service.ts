import {Injectable} from '@angular/core';
import {ANGULAR_VELOCITY_DATA} from '../data/angular-velocity.data';
import {ValueConversionService} from './value-conversion.service';

/**
 * Service to supply unit data of this type
 */

@Injectable()
export class AngularVelocityConversionService extends ValueConversionService {

  /**
   * Constructor, calls super and loads data for this service type
   */
  constructor() {
    super();
    this.loadData();
  }

  /**
   * Loads the data specific to this type from a constant
   */
  loadData(): void {
    this._data = ANGULAR_VELOCITY_DATA;
  }

}
