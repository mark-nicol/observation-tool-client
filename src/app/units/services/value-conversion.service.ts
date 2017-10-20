import {Injectable} from '@angular/core';

@Injectable()
export abstract class ValueConversionService {

  protected _data: any;

  constructor() {
  }

  abstract loadData(): void;

  getConversionFactor(sourceUnit: string, targetUnit: string): number {
    const sourceFactor = this._data[sourceUnit],
      targetFactor = this._data[targetUnit];
    return sourceFactor / targetFactor;
  }

  getUnits(): string[] {
    const returnArray = [];
    const dataKeys = Object.keys;
    for (const unit of dataKeys(this._data)) {
      returnArray.push(unit);
    }
    return returnArray;
  }

}
