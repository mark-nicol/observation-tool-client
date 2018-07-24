// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IObservingParameters} from './observing-parameters.interface';
import {IAngleT, IAngularVelocityT, IFrequencyT, ITimeT} from './test';

export interface IHolographyParameters extends IObservingParameters {
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
