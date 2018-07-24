// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IFrequencyT} from './test';
import {IBaseBandSpecification} from './baseband-configuration.interface';

export interface IFrequencySetup {
  restFrequency: IFrequencyT;
  transitionName: string;
  lO1Frequency: IFrequencyT;
  isUserSpecifiedLO1: boolean;
  hasHardwareSetup: boolean;
  floog: IFrequencyT;
  tuneHigh: boolean;
  BaseBandSpecification: IBaseBandSpecification[];
  receiverBand: string;
  dopplerReference: string;
}
