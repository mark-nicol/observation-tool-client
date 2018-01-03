import {ReflectiveInjector} from '@angular/core';
import {AngularVelocityUnits} from '../enums/angular-velocity-units.enum';
import {AngularVelocityConversionService} from '../services/angular-velocity-conversion.service';
import {ValueUnitPair} from './value-unit-pair';

/**
 * ValueUnitPair for angular velocity units
 */

export class AngularVelocity extends ValueUnitPair {

  /**
   * Calls super constructor, injects correct conversion service
   * @param unit  The units which the value is stored in
   * @param value The value of the pair
   */
  constructor(unit = AngularVelocityUnits.DEG_S, value = 0.0) {
    super(unit, value, AngularVelocityUnits.DEG_S);
    const injector               = ReflectiveInjector.resolveAndCreate([AngularVelocityConversionService]);
    this._valueConversionService = injector.get(AngularVelocityConversionService);
  }
}
