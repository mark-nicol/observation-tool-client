import {Injectable} from '@angular/core';
import {LONGITUDE_DATA} from '../data/longitude.data';
import {ValueConversionService} from './value-conversion.service';

/**
 * Service to supply unit data of this type
 */

@Injectable()
export class LongitudeConversionService extends ValueConversionService {

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
    this._data = LONGITUDE_DATA;
  }

}
