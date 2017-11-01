import {ValueConversionService} from '../services/value-conversion.service';

/**
 * Value unit pair class
 *
 * Allows for storing of a value and defining a unit against it.
 * From this the value can be retrieved in different units of the same type allowing simple conversions
 */

export abstract class ValueUnitPair {

  /** The current unit */
  private _unit: string;

  /** The current value */
  private _value: number;

  /** The default unit for a value of this type */
  protected _defaultUnit: string;

  /** The conversion service for a value of this type */
  protected _valueConversionService: ValueConversionService;

  /**
   * Constructor, sets the unit, value, and default units
   * @param unit        The units to use
   * @param value       The value to store
   * @param defaultUnit The default units for a value of this type
   */
  constructor(unit: string, value = 0.0, defaultUnit?: string) {
    this.unit = unit;
    this.value = value;
    if (defaultUnit) {
      this._defaultUnit = defaultUnit;
    }
  }

  /**
   * Returns the default unit type
   */
  get defaultUnit(): string {
    return this._defaultUnit;
  }

  /**
   * Returns the current unit
   */
  get unit(): string {
    return this._unit;
  }

  /**
   * Sets the current unit
   * @param newUnit The new unit to use
   */
  set unit(newUnit: string) {
    this._unit = newUnit;
  }

  /**
   * Returns the current value
   */
  get value(): number {
    return this._value;
  }

  /**
   * Sets the current value
   * @param newValue The new value to store
   */
  set value(newValue: number) {
    this._value = newValue;
  }

  /**
   * Returns the correct conversion service for a value of this type
   */
  get valueConversionService(): ValueConversionService {
    return this._valueConversionService;
  }

  /**
   * Returns the stored value in its default units
   */
  getValueInDefaultUnits(): number {
    return this.getValueInUnits(this.defaultUnit);
  }

  /**
   * Returns the stored value converted to the specified units
   * @param targetUnits The units to covert the value into
   */
  getValueInUnits(targetUnits: string): number {
    return this.value * this._valueConversionService.getConversionFactor(this.unit, targetUnits);
  }

  /**
   * Sets the current units to the default unit of this type
   */
  setUnitsToDefault(): void {
    this.unit = this.defaultUnit;
  }

  /**
   * Returns a string array of all possible units of this type
   */
  getPossibleUnits(): string[] {
    return this.valueConversionService.getUnits();
  }

}
