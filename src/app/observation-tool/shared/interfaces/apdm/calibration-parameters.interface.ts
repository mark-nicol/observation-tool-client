// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IObservingParameters} from './observing-parameters.interface';
import {Time} from '../../../../units/classes/time';

export interface ICalibratorParameters extends IObservingParameters {
  '@type': 'CalibratorParametersT';
  cycleTime: Time;
  defaultIntegrationTime: Time;
  subScanDuration: Time;
  forceAtmCal: boolean;
  forceExecution: boolean;
  dataOrigin: string;
}
