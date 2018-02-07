import {ValueConversionService} from '../services/value-conversion.service';

/**
 * Value unit pair class
 *
 * Allows for storing of a content and defining a unit against it.
 * From this the content can be retrieved in different units of the same type allowing simple conversions
 */

export abstract class ValueUnitPair {

  /**
   * Constructor, sets the unit, content, and default units
   * @param unit        The units to use
   * @param value       The content to store
   * @param defaultUnit The default units for a content of this type
   */
  constructor(unit: string, value = 0.0, defaultUnit?: string) {
    this.unit    = unit;
    this.content = value;
    if (defaultUnit) {
      this._defaultUnit = defaultUnit;
    }
  }

  /** The current unit */
  private _unit: string;

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

  /** The current content */
  private _content: number;

  /**
   * Returns the current content
   */
  get content(): number {
    return this._content;
  }

  /**
   * Sets the current content
   * @param newValue The new content to store
   */
  set content(newValue: number) {
    this._content = newValue;
  }

  /** The default unit for a content of this type */
  protected _defaultUnit: string;

  /**
   * Returns the default unit type
   */
  get defaultUnit(): string {
    return this._defaultUnit;
  }

  /** The conversion service for a content of this type */
  protected _valueConversionService: ValueConversionService;

  /**
   * Returns the correct conversion service for a content of this type
   */
  get valueConversionService(): ValueConversionService {
    return this._valueConversionService;
  }

  /**
   * Returns the stored content in its default units
   */
  getValueInDefaultUnits(): number {
    return this.getValueInUnits(this.defaultUnit);
  }

  /**
   * Returns the stored content converted to the specified units
   * @param targetUnits The units to covert the content into
   */
  getValueInUnits(targetUnits: string): number {
    return this.content * this._valueConversionService.getConversionFactor(this.unit, targetUnits);
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
