import {ReflectiveInjector} from '@angular/core';
import {LatitudeUnits} from '../enums/latitude-units.enum';
import {LatitudeConversionService} from '../services/latitude-conversion.service';
import {ValueUnitPair} from './value-unit-pair';

/**
 * ValueUnitPair for latitude units
 */

export class Latitude extends ValueUnitPair {

  /**
   * Calls super constructor, injects correct conversion service
   * @param unit  The units which the value is stored in
   * @param value The value of the pair
   */
  constructor(unit = LatitudeUnits.DEG, value = 0.0) {
    super(unit, value, LatitudeUnits.DEG);
    const injector = ReflectiveInjector.resolveAndCreate([LatitudeConversionService]);
    this._valueConversionService = injector.get(LatitudeConversionService);
  }
}
