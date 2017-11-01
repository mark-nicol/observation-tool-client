import {ValueUnitPair} from './value-unit-pair';
import {AngleUnits} from '../enums/angle-units.enum';
import {ReflectiveInjector} from '@angular/core';
import {AngleConversionService} from '../services/angle-conversion.service';

/**
 * ValueUnitPair for angular units
 */

export class Angle extends ValueUnitPair {

  /**
   * Calls super constructor, injects correct conversion service
   * @param unit  The units which the value is stored in
   * @param value The value of the pair
   */
  constructor(unit = AngleUnits.DEG, value = 0.0) {
    super(unit, value, AngleUnits.DEG);
    const injector = ReflectiveInjector.resolveAndCreate([AngleConversionService]);
    this._valueConversionService = injector.get(AngleConversionService);
  }
}
