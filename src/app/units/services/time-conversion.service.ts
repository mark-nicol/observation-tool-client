import {ValueConversionService} from './value-conversion.service';
import {Injectable} from '@angular/core';
import {TIME_DATA} from '../data/time.data';

/**
 * Service to supply unit data of this type
 */

@Injectable()
export class TimeConversionService extends ValueConversionService {

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
    this._data = TIME_DATA;
  }
}
