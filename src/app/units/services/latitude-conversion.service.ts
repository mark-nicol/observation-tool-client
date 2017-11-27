import {Injectable} from '@angular/core';
import {LATITUDE_DATA} from '../data/latitude.data';
import {ValueConversionService} from './value-conversion.service';

/**
 * Service to supply unit data of this type
 */

@Injectable()
export class LatitudeConversionService extends ValueConversionService {

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
    this._data = LATITUDE_DATA;
  }

}
