import {ReflectiveInjector} from '@angular/core';
import {SensitivityUnits} from '../enums/sensitivity-units.enum';
import {SensitivityConversionService} from '../services/sensitivity-conversion.service';
import {ValueUnitPair} from './value-unit-pair';

export class Sensitivity extends ValueUnitPair {
  constructor(unit = SensitivityUnits.JY, value = 0.0) {
    super(unit, value, SensitivityUnits.JY);
    const injector = ReflectiveInjector.resolveAndCreate([SensitivityConversionService]);
    this._valueConversionService = injector.get(SensitivityConversionService);
  }
}
