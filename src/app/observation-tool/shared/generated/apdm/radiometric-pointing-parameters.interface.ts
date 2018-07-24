// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IObservingParameters} from './observing-parameters.interface';
import {IAngleT, IFluxT} from './test';

export interface IRadiometricPointingParameters extends IObservingParameters {
  '@type': 'RadiometricPointingParametersT';
  antennaPositionTolerance: IAngleT;
  elevationLimit: IAngleT;
  maxFlux: IFluxT;
  minFlux: IFluxT;
  randomizeOrder: boolean;
}
