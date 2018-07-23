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

import {SpeedUnits} from '../enums/speed-units.enum';
import {Speed} from './speed';

describe('Class: Speed', () => {
  let cls: Speed;

  beforeEach(() => {
    cls = new Speed(undefined, 10);
  });

  afterEach(() => {
    cls = null;
  });

  it('Default unit should be KM/S', () => {
    expect(cls.defaultUnit).toEqual(SpeedUnits.KM_S);
  });

  describe('Conversion checks', () => {
    it('10 KM/S in KM/H should be 0.0027777778', () => {
      expect(+cls.getValueInUnits(SpeedUnits.KM_H).toFixed(10)).toEqual(0.0027777778);
    });

    it('10 KM/S in M/S should be 10000', () => {
      expect(+cls.getValueInUnits(SpeedUnits.M_S).toFixed(10)).toEqual(10000);
    });
  });

});
