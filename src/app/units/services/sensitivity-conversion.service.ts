import {Injectable} from '@angular/core';
import {SENSITIVITY_DATA} from '../data/sensitivity.data';
import {ValueConversionService} from './value-conversion.service';

/**
 * Service to supply unit data of this type
 */

@Injectable()
export class SensitivityConversionService extends ValueConversionService {

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
    this._data = SENSITIVITY_DATA;
  }

}
