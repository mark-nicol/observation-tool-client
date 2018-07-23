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

import {AngularVelocityUnits} from '../enums/angular-velocity-units.enum';
import {AngularVelocity} from './angular-velocity';

describe('Class: AngularVelocity', () => {
  let cls: AngularVelocity;

  beforeEach(() => {
    cls = new AngularVelocity(undefined, 10.000);
  });

  afterEach(() => {
    cls = null;
  });

  it('Default units should be DEG_S', () => {
    expect(cls.defaultUnit).toEqual(AngularVelocityUnits.DEG_S);
  });

  describe('Conversion checks', () => {

    it('10 DEG_S in ARCSEC_S should be 36000', () => {
      expect(cls.getValueInUnits(AngularVelocityUnits.ARCSEC_S)).toEqual(36000);
    });

    it('10 DEG_S in ARCMIN_S should be 600', () => {
      expect(cls.getValueInUnits(AngularVelocityUnits.ARCMIN_S)).toEqual(600);
    });

    it('10 DEG_S in MAS_YR should be 113544e10', () => {
      expect(cls.getValueInUnits(AngularVelocityUnits.MAS_YR)).toEqual(113544e10);
    });

  });

});
