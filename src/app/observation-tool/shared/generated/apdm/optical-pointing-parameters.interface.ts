// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IObservingParameters} from './observing-parameters.interface';
import {IMagnitude} from './magnitude.interface';
import {IAngleT} from './test';

export interface IOpticalPointingParameters extends IObservingParameters {
  '@type': 'OpticalPointingParametersT';
  antennaPositionTolerance: IAngleT;
  elevationLimit: IAngleT;
  maxMagnitude: IMagnitude;
  minMagnitude: IMagnitude;
  randomizeOrder: boolean;
}
