import {ReflectiveInjector} from '@angular/core';
import {LatitudeUnits} from '../enums/latitude-units.enum';
import {LatitudeConversionService} from '../services/latitude-conversion.service';
import {ValueUnitPair} from './value-unit-pair';

export class Latitude extends ValueUnitPair {
  constructor(unit = LatitudeUnits.DEG, value = 0.0) {
    super(unit, value, LatitudeUnits.DEG);
    const injector = ReflectiveInjector.resolveAndCreate([LatitudeConversionService]);
    this._valueConversionService = injector.get(LatitudeConversionService);
  }
}
