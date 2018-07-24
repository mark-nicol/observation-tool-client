// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IAngleT, ITimeT} from '../test';
import {IMagnitudeT} from '../magnitude.interface';

export interface IOpticalCameraControlParameters {
  elevationLimit: IAngleT;
  antennaPositionTolerance: IAngleT;
  minMagnitude: IMagnitudeT;
  maxMagnitude: IMagnitudeT;
  sBMaximumTime: ITimeT;
  randomizeOrder: boolean;
}
