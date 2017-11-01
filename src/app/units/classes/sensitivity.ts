import {ReflectiveInjector} from '@angular/core';
import {SensitivityUnits} from '../enums/sensitivity-units.enum';
import {SensitivityConversionService} from '../services/sensitivity-conversion.service';
import {ValueUnitPair} from './value-unit-pair';

/**
 * ValueUnitPair for sensitivity units
 */

export class Sensitivity extends ValueUnitPair {

  /**
   * Calls super constructor, injects correct conversion service
   * @param unit  The units which the value is stored in
   * @param value The value of the pair
   */
  constructor(unit = SensitivityUnits.JY, value = 0.0) {
    super(unit, value, SensitivityUnits.JY);
    const injector = ReflectiveInjector.resolveAndCreate([SensitivityConversionService]);
    this._valueConversionService = injector.get(SensitivityConversionService);
  }
}
