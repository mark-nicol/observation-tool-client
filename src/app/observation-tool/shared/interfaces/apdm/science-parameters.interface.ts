// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IObservingParameters} from './observing-parameters.interface';
import {Frequency} from '../../../../units/classes/frequency';
import {Sensitivity} from '../../../../units/classes/sensitivity';
import {Time} from '../../../../units/classes/time';

export interface IScienceParameters extends IObservingParameters {
  '@type': 'ScienceParametersT';
  representativeBandwidth: Frequency;
  representativeFrequency: Frequency;
  sensitivityGoal: Sensitivity;
  integrationTime: IIntTimeSource;
  subScanDuration: Time;
  forceAtmCal: boolean;
}
