import {IObservingParametersT} from './observing-parameters.interface';
import {IMagnitudeT} from './magnitude.interface';
import {IAngleT} from './test';

export interface IOpticalPointingParametersT extends IObservingParametersT {
  '@type': 'OpticalPointingParametersT';
  antennaPositionTolerance: IAngleT;
  elevationLimit: IAngleT;
  maxMagnitude: IMagnitudeT;
  minMagnitude: IMagnitudeT;
  randomizeOrder: boolean;
}
