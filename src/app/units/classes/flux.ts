import {ReflectiveInjector} from '@angular/core';
import {FluxUnits} from '../enums/flux-units.enum';
import {FluxConversionService} from '../services/flux-conversion.service';
import {ValueUnitPair} from './value-unit-pair';

export class Flux extends ValueUnitPair {
  constructor(unit = FluxUnits.JY, value = 0.0) {
    super(unit, value, FluxUnits.JY);
    const injector = ReflectiveInjector.resolveAndCreate([FluxConversionService]);
    this._valueConversionService = injector.get(FluxConversionService);
  }
}
