import {ValueUnitPair} from './value-unit-pair';
import {ReflectiveInjector} from '@angular/core';
import {TimeUnits} from '../enums/time-units.enum';
import {TimeConversionService} from '../services/time-conversion.service';

export class Time extends ValueUnitPair {

  /**
   * Calls super constructor, injects correct conversion service
   * @param unit  The units which the content is stored in
   * @param value The content of the pair
   */
  constructor(unit = TimeUnits.S, value = 0.0) {
    super(unit, value, TimeUnits.S);
    const injector               = ReflectiveInjector.resolveAndCreate([TimeConversionService]);
    this._valueConversionService = injector.get(TimeConversionService);
  }

}
