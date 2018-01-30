import {ReflectiveInjector} from '@angular/core';
import {AngleUnits} from '../enums/angle-units.enum';
import {AngleConversionService} from '../services/angle-conversion.service';
import {ValueUnitPair} from './value-unit-pair';

/**
 * ValueUnitPair for angular units
 */

export class Angle extends ValueUnitPair {

  /**
   * Calls super constructor, injects correct conversion service
   * @param unit  The units which the content is stored in
   * @param value The content of the pair
   */
  constructor(unit = AngleUnits.DEG, value = 0.0) {
    super(unit, value, AngleUnits.DEG);
    const injector               = ReflectiveInjector.resolveAndCreate([AngleConversionService]);
    this._valueConversionService = injector.get(AngleConversionService);
  }
}
