import {SpeedUnits} from '../enums/speed-units.enum';
import {ReflectiveInjector} from '@angular/core';
import {SpeedConversionService} from '../services/speed-conversion.service';
import {ValueUnitPair} from './value-unit-pair';

export class Speed extends ValueUnitPair {

  // TODO: Add light speed

  constructor(unit = SpeedUnits.KM_S, value = 0.0) {
    super(unit, value, SpeedUnits.KM_S);
    const injector = ReflectiveInjector.resolveAndCreate([SpeedConversionService]);
    this._valueConversionService = injector.get(SpeedConversionService);
  }
}
