import {Injectable} from '@angular/core';
import {ValueConversionService} from './value-conversion.service';
import {DATA_RATE_DATA} from '../data/data-rate.data';

/**
 * Service to supply unit data of this type
 */

@Injectable()
export class DataRateConversionService extends ValueConversionService {

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
    this._data = DATA_RATE_DATA;
  }

}
