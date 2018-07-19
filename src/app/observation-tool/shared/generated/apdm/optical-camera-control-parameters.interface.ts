import {IAngleT, IMagnitudeT, ITimeT} from '../test';

export interface IOpticalCameraControlParametersT {
  elevationLimit: IAngleT;
  antennaPositionTolerance: IAngleT;
  minMagnitude: IMagnitudeT;
  maxMagnitude: IMagnitudeT;
  sBMaximumTime: ITimeT;
  randomizeOrder: boolean;
}
