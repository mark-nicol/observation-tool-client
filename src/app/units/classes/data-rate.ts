import {ReflectiveInjector} from '@angular/core';
import {ValueUnitPair} from './value-unit-pair';
import {DataRateUnits} from '../enums/data-rate-units.enum';
import {DataRateConversionService} from '../services/data-rate-conversion.service';

/**
 * ValueUnitPair for speed units
 */

export class DataRate extends ValueUnitPair {

  /**
   * Calls super constructor, injects correct conversion service
   * @param unit  The units which the content is stored in
   * @param value The content of the pair
   */
  constructor(unit = DataRateUnits.MB_S, value = 0.0) {
    super(unit, value, DataRateUnits.MB_S);
    const injector               = ReflectiveInjector.resolveAndCreate([DataRateConversionService]);
    this._valueConversionService = injector.get(DataRateConversionService);
  }
}
