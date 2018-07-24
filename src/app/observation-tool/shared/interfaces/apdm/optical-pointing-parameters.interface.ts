// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IObservingParameters} from './observing-parameters.interface';
import {IMagnitude} from './magnitude.interface';
import {Angle} from '../../../../units/classes/angle';

export interface IOpticalPointingParameters extends IObservingParameters {
  '@type': 'OpticalPointingParametersT';
  antennaPositionTolerance: Angle;
  elevationLimit: Angle;
  maxMagnitude: IMagnitude;
  minMagnitude: IMagnitude;
  randomizeOrder: boolean;
}
