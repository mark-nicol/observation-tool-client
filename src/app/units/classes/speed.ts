import {ReflectiveInjector} from '@angular/core';
import {SpeedUnits} from '../enums/speed-units.enum';
import {SpeedConversionService} from '../services/speed-conversion.service';
import {ValueUnitPair} from './value-unit-pair';

/**
 * ValueUnitPair for speed units
 */

export class Speed extends ValueUnitPair {

  static C = 2.99792458e8;

  /**
   * Calls super constructor, injects correct conversion service
   * @param unit  The units which the content is stored in
   * @param value The content of the pair
   */
  constructor(unit = SpeedUnits.KM_S, value = 0.0) {
    super(unit, value, SpeedUnits.KM_S);
    const injector               = ReflectiveInjector.resolveAndCreate([SpeedConversionService]);
    this._valueConversionService = injector.get(SpeedConversionService);
  }
}
