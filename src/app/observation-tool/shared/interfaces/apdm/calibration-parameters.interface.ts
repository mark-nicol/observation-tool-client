// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IObservingParameters} from './observing-parameters.interface';
import {ITimeT} from './test';

export interface ICalibratorParameters extends IObservingParameters {
  '@type': 'CalibratorParametersT';
  cycleTime: ITimeT;
  defaultIntegrationTime: ITimeT;
  subScanDuration: ITimeT;
  forceAtmCal: boolean;
  forceExecution: boolean;
  dataOrigin: string;
}
