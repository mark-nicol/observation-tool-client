import {IObservingParametersT} from './observing-parameters.interface';
import {IAngleT, IAngularVelocityT, IFrequencyT, ITimeT} from './test';

export interface IHolographyParametersT extends IObservingParametersT {
  '@type': 'HolographyParametersT';
  frequency: IFrequencyT;
  startFraction: number;
  speed: IAngularVelocityT;
  rowsCal: number;
  calTime: ITimeT;
  nRows: number;
  rowSize: IAngleT;
  uniDirectionalScan: boolean;
  towerName: string;
  scanDirection: string;
  calMode: string;
}
