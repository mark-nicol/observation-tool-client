// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IObservingParameters} from './observing-parameters.interface';
import {Flux} from '../../../../units/classes/flux';
import {Angle} from '../../../../units/classes/angle';

export interface IRadiometricPointingParameters extends IObservingParameters {
  '@type': 'RadiometricPointingParametersT';
  antennaPositionTolerance: Angle;
  elevationLimit: Angle;
  maxFlux: Flux;
  minFlux: Flux;
  randomizeOrder: boolean;
}
