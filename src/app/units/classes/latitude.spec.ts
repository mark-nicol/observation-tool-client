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

import {LatitudeUnits} from '../enums/latitude-units.enum';
import {Latitude} from './latitude';

describe('Class: Latitude', () => {
  let cls: Latitude;

  beforeEach(() => {
    cls = new Latitude(undefined, 10.000);
  });

  afterEach(() => {
    cls = null;
  });

  it('Default units should be DEG', () => {
    expect(cls.defaultUnit).toEqual(LatitudeUnits.DEG);
  });

  describe('Conversion checks', () => {

    it('10 DEG in default units should be 10', () => {
      expect(cls.getValueInDefaultUnits()).toEqual(10.000);
    });

    it('10 DEG in RAD should be 0.174533', () => {
      expect(+cls.getValueInUnits(LatitudeUnits.RAD).toFixed(6)).toEqual(0.174533);
    });

    it('10 DEG in MAS should be 36000000', () => {
      expect(+cls.getValueInUnits(LatitudeUnits.MAS).toFixed(0)).toEqual(36000000);
    });

    it('10 DEG in ARCSEC should be 36000', () => {
      expect(cls.getValueInUnits(LatitudeUnits.ARCSEC)).toEqual(36000);
    });

    it('10 DEG in ARCMIN should be 600', () => {
      expect(cls.getValueInUnits(LatitudeUnits.ARCMIN)).toEqual(600);
    });

  });

});
