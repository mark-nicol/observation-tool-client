import {ValueConversionService} from '../services/value-conversion.service';

export abstract class ValueUnitPair {

  private _unit: string;
  private _value: number;
  protected _defaultUnit: string;
  protected _valueConversionService: ValueConversionService;

  constructor(unit: string, value = 0.0, defaultUnit?: string) {
    this.unit = unit;
    this.value = value;
    if (defaultUnit) {
      this._defaultUnit = defaultUnit;
    }
  }

  get defaultUnit(): string {
    return this._defaultUnit;
  }

  get unit(): string {
    return this._unit;
  }

  set unit(newUnit: string) {
    this._unit = newUnit;
  }

  get value(): number {
    return this._value;
  }

  set value(newValue: number) {
    this._value = newValue;
  }

  get valueConversionService(): ValueConversionService {
    return this._valueConversionService;
  }

  getValueInDefaultUnits(): number {
    return this.getValueInUnits(this.defaultUnit);
  }

  getValueInUnits(targetUnits: string): number {
    return this.value * this._valueConversionService.getConversionFactor(this.unit, targetUnits);
  }

  setUnitsToDefault(): void {
    this.unit = this.defaultUnit;
  }

  getPossibleUnits(): string[] {
    return this.valueConversionService.getUnits();
  }

}
