// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IObservingParameters} from './observing-parameters.interface';
import {IFrequencyT, IIntTimeSourceT, ISensitivityT, ITimeT} from './test';

export interface IScienceParameters extends IObservingParameters {
  '@type': 'ScienceParametersT';
  representativeBandwidth: IFrequencyT;
  representativeFrequency: IFrequencyT;
  sensitivityGoal: ISensitivityT;
  integrationTime: IIntTimeSourceT;
  subScanDuration: ITimeT;
  forceAtmCal: boolean;
}
