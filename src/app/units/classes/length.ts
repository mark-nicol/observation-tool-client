import {ValueUnitPair} from './value-unit-pair';
import {LengthUnits} from '../enums/length-units.enum';
import {LengthConversionService} from '../services/length-conversion.service';
import {ReflectiveInjector} from '@angular/core';

export class Length extends ValueUnitPair {

  constructor(unit = LengthUnits.MM, value = 0.0) {
    super(unit, value, LengthUnits.MM);
    const injector = ReflectiveInjector.resolveAndCreate([LengthConversionService]);
    this._valueConversionService = injector.get(LengthConversionService);
  }
}
