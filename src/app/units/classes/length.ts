import {ReflectiveInjector} from '@angular/core';
import {LengthUnits} from '../enums/length-units.enum';
import {LengthConversionService} from '../services/length-conversion.service';
import {ValueUnitPair} from './value-unit-pair';

/**
 * ValueUnitPair for length units
 */

export class Length extends ValueUnitPair {

  /**
   * Calls super constructor, injects correct conversion service
   * @param unit  The units which the content is stored in
   * @param value The content of the pair
   */
  constructor(unit = LengthUnits.MM, value = 0.0) {
    super(unit, value, LengthUnits.MM);
    const injector               = ReflectiveInjector.resolveAndCreate([LengthConversionService]);
    this._valueConversionService = injector.get(LengthConversionService);
  }
}
