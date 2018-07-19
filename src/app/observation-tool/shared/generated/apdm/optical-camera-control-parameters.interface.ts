import {IAngleT, ITimeT} from '../test';
import {IMagnitudeT} from '../magnitude.interface';

export interface IOpticalCameraControlParametersT {
  elevationLimit: IAngleT;
  antennaPositionTolerance: IAngleT;
  minMagnitude: IMagnitudeT;
  maxMagnitude: IMagnitudeT;
  sBMaximumTime: ITimeT;
  randomizeOrder: boolean;
}
