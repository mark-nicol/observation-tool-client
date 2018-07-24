// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {ISkyCoordinates} from './sky-coordinates.interface';
import {AngularVelocity} from '../../../../units/classes/angular-velocity';
import {Angle} from '../../../../units/classes/angle';

export interface IOpticalPointingTargetParameters {
  sourceName: string;
  sourceCoordinates: ISkyCoordinates;
  pmRA: AngularVelocity;
  pmDec: AngularVelocity;
  parallax: Angle;
  visibleMagnitude: number;
}
