import {ValueUnitPair} from './value-unit-pair';
import {FrequencyUnits} from '../enums/frequency-units.enum';
import {ReflectiveInjector} from '@angular/core';
import {FrequencyConversionService} from '../services/frequency-conversion.service';

export class Frequency extends ValueUnitPair {
  constructor(unit = FrequencyUnits.GHZ, value = 0.0) {
    super(unit, value, FrequencyUnits.GHZ);
    const injector = ReflectiveInjector.resolveAndCreate([FrequencyConversionService]);
    this._valueConversionService = injector.get(FrequencyConversionService);
  }
}
