import {ReflectiveInjector} from '@angular/core';
import {LongitudeUnits} from '../enums/Longitude-units.enum';
import {LongitudeConversionService} from '../services/Longitude-conversion.service';
import {ValueUnitPair} from './value-unit-pair';

/**
 * ValueUnitPair for longitude units
 */

export class Longitude extends ValueUnitPair {

  /**
   * Calls super constructor, injects correct conversion service
   * @param unit  The units which the value is stored in
   * @param value The value of the pair
   */
  constructor(unit = LongitudeUnits.DEG, value = 0.0) {
    super(unit, value, LongitudeUnits.DEG);
    const injector = ReflectiveInjector.resolveAndCreate([LongitudeConversionService]);
    this._valueConversionService = injector.get(LongitudeConversionService);
  }
}
