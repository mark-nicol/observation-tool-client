import {ValueUnitPair} from './value-unit-pair';
import {FrequencyUnits} from '../enums/frequency-units.enum';
import {ReflectiveInjector} from '@angular/core';
import {FrequencyConversionService} from '../services/frequency-conversion.service';

/**
 * ValueUnitPair for frequency units
 */

export class Frequency extends ValueUnitPair {

  /**
   * Calls super constructor, injects correct conversion service
   * @param unit  The units which the value is stored in
   * @param value The value of the pair
   */
  constructor(unit = FrequencyUnits.GHZ, value = 0.0) {
    super(unit, value, FrequencyUnits.GHZ);
    const injector = ReflectiveInjector.resolveAndCreate([FrequencyConversionService]);
    this._valueConversionService = injector.get(FrequencyConversionService);
  }
}
