// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IMagnitude} from './magnitude.interface';
import {Angle} from '../../../../units/classes/angle';
import {Time} from '../../../../units/classes/time';

export interface IOpticalCameraControlParameters {
  elevationLimit: Angle;
  antennaPositionTolerance: Angle;
  minMagnitude: IMagnitude;
  maxMagnitude: IMagnitude;
  sBMaximumTime: Time;
  randomizeOrder: boolean;
}
