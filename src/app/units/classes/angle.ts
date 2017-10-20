import {ValueUnitPair} from './value-unit-pair';
import {AngleUnits} from '../enums/angle-units.enum';
import {ReflectiveInjector} from '@angular/core';
import {AngleConversionService} from '../services/angle-conversion.service';

export class Angle extends ValueUnitPair {
  constructor(unit = AngleUnits.DEG, value = 0.0) {
    super(unit, value, AngleUnits.DEG);
    const injector = ReflectiveInjector.resolveAndCreate([AngleConversionService]);
    this._valueConversionService = injector.get(AngleConversionService);
  }
}
