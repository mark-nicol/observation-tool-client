import {IObservingParametersT} from './observing-parameters.interface';
import {IAngleT, IFluxT} from './test';

export interface IRadiometricPointingParametersT extends IObservingParametersT {
  '@type': 'RadiometricPointingParametersT';
  antennaPositionTolerance: IAngleT;
  elevationLimit: IAngleT;
  maxFlux: IFluxT;
  minFlux: IFluxT;
  randomizeOrder: boolean;
}
