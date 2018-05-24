import {ValueUnitPair} from './value-unit-pair';
import {ReflectiveInjector} from '@angular/core';
import {TemperatureConversionService} from '../services/temperature-conversion.service';
import {TemperatureUnits} from '../enums/temperature-units.enum';

export class Temperature extends ValueUnitPair {

  /**
   * Calls super constructor, injects correct conversion service
   * @param unit  The units which the content is stored in
   * @param value The content of the pair
   */
  constructor(unit = TemperatureUnits.K, value = 0.0) {
    super(unit, value, TemperatureUnits.K);
    const injector               = ReflectiveInjector.resolveAndCreate([TemperatureConversionService]);
    this._valueConversionService = injector.get(TemperatureConversionService);
  }

}
