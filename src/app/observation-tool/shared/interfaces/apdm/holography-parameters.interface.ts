// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IObservingParameters} from './observing-parameters.interface';
import {Frequency} from '../../../../units/classes/frequency';
import {AngularVelocity} from '../../../../units/classes/angular-velocity';
import {Angle} from '../../../../units/classes/angle';
import {Time} from '../../../../units/classes/time';

export interface IHolographyParameters extends IObservingParameters {
  '@type': 'HolographyParametersT';
  frequency: Frequency;
  startFraction: number;
  speed: AngularVelocity;
  rowsCal: number;
  calTime: Time;
  nRows: number;
  rowSize: Angle;
  uniDirectionalScan: boolean;
  towerName: string;
  scanDirection: string;
  calMode: string;
}
