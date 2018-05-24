import {ValueConversionService} from './value-conversion.service';
import {Injectable} from '@angular/core';
import {TEMPERATURE_DATA} from '../data/temperature.data';

/**
 * Service to supply unit data of this type
 */

@Injectable()
export class TemperatureConversionService extends ValueConversionService {

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
    this._data = TEMPERATURE_DATA;
  }
}
