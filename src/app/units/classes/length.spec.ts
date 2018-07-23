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

import {LengthUnits} from '../enums/length-units.enum';
import {Length} from './length';

describe('Class: Length', () => {
  let cls: Length;

  beforeEach(() => {
    cls = new Length(undefined, 10);
  });

  afterEach(() => {
    cls = null;
  });

  it('10 MM in default unit should be 10', () => {
    expect(cls.getValueInDefaultUnits()).toEqual(10);
  });

  it('Default unit should be MM', () => {
    expect(cls.defaultUnit).toEqual(LengthUnits.MM);
  });

  it('10 MM to CM should be 1', () => {
    expect(cls.getValueInUnits(LengthUnits.CM)).toEqual(1.0);
  });

  it('10 MM to M should be 10000', () => {
    expect(cls.getValueInUnits(LengthUnits.M)).toEqual(0.01);
  });

  it('10 MM in KM should be 0.01', () => {
    expect(+cls.getValueInUnits(LengthUnits.KM).toFixed(5)).toEqual(1e-5);
  });

  it('Change units to CM to work', () => {
    cls.unit = LengthUnits.CM;
    expect(cls.unit).toEqual(LengthUnits.CM);
  });

  it('1 PC to KM should be 3.0951e13', () => {
    cls.unit    = LengthUnits.PC;
    cls.content = 1.000;
    expect(cls.getValueInUnits(LengthUnits.KM)).toEqual(3.0951e13);
  });

  it('Value should remain constant', () => {
    for (let i = 0; i < 5; i++) {
      cls.getValueInUnits(LengthUnits.CM);
    }
    expect(cls.content).toEqual(10);
  });

});
