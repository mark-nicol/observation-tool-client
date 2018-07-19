import {IObservingParametersT} from './observing-parameters.interface';
import {IFrequencyT, IIntTimeSourceT, ISensitivityT, ITimeT} from './test';

export interface IScienceParametersT extends IObservingParametersT {
  '@type': 'ScienceParametersT';
  representativeBandwidth: IFrequencyT;
  representativeFrequency: IFrequencyT;
  sensitivityGoal: ISensitivityT;
  integrationTime: IIntTimeSourceT;
  subScanDuration: ITimeT;
  forceAtmCal: boolean;
}
