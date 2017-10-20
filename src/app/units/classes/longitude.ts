import {ReflectiveInjector} from '@angular/core';
import {LongitudeUnits} from '../enums/Longitude-units.enum';
import {LongitudeConversionService} from '../services/Longitude-conversion.service';
import {ValueUnitPair} from './value-unit-pair';

export class Longitude extends ValueUnitPair {
  constructor(unit = LongitudeUnits.DEG, value = 0.0) {
    super(unit, value, LongitudeUnits.DEG);
    const injector = ReflectiveInjector.resolveAndCreate([LongitudeConversionService]);
    this._valueConversionService = injector.get(LongitudeConversionService);
  }
}
