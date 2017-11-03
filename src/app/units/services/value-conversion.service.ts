import {Injectable} from '@angular/core';

/**
 * Service to convert a value of a type from one unit to another
 */

@Injectable()
export abstract class ValueConversionService {

  /** Data of units and conversion factors */
  protected _data: any;

  /** Loads the data for the unit type, dependant on unit type */
  abstract loadData(): void;

  /**
   * Returns the conversion factor for converting one unit to another
   * @param sourceUnit The unit to convert from
   * @param targetUnit The unit to convert to
   */
  getConversionFactor(sourceUnit: string, targetUnit: string): number {
    const sourceFactor = this._data[sourceUnit],
      targetFactor = this._data[targetUnit];
    return sourceFactor / targetFactor;
  }

  /**
   * Get all the possible units for the current value type
   */
  getUnits(): string[] {
    const returnArray = [];
    const dataKeys = Object.keys;
    for (const unit of dataKeys(this._data)) {
      returnArray.push(unit);
    }
    return returnArray;
  }

}
