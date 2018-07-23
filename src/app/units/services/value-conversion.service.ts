/*
 * ALMA - Atacama Large Millimeter Array
 * Copyright (c) UKATC - UK Astronomy Technology Centre, Science and Technology Facilities Council, 2018
 * (in the framework of the ALMA collaboration).
 * All rights reserved.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307  USA
 */

import {Injectable} from '@angular/core';

/**
 * Service to convert a content of a type from one unit to another
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
   * Get all the possible units for the current content type
   */
  getUnits(): string[] {
    const returnArray = [];
    const dataKeys    = Object.keys;
    for (const unit of dataKeys(this._data)) {
      returnArray.push(unit);
    }
    return returnArray;
  }

}
