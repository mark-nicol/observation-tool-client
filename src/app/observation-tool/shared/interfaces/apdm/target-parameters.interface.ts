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

import {AngularVelocity} from '../../../../units/classes/angular-velocity';
import {Angle} from '../../../../units/classes/angle';
import {IVelocity} from './velocity.interface';
import {IExpectedProperties} from './expected-properties.interface';
import {IField} from './field.interface';
import {ISkyCoordinates} from './sky-coordinates.interface';

export interface ITargetParameters {
  isMosaic: boolean;
  fields?: (IField)[] | null;
  type: string;
  sourceName: string;
  sourceCoordinates: ISkyCoordinates;
  pmRA: AngularVelocity;
  pmDec: AngularVelocity;
  parallax: Angle;
  nonSiderealMotion: boolean;
  sourceEphemeris: string;
  sourceVelocity: IVelocity;
  index: number;
  expectedProperties: IExpectedProperties;
  solarSystemObject: string;
}
