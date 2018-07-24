// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IBaseBandSpecification} from './baseband-configuration.interface';
import {Frequency} from '../../../../units/classes/frequency';

export interface IFrequencySetup {
  restFrequency: Frequency;
  transitionName: string;
  lO1Frequency: Frequency;
  isUserSpecifiedLO1: boolean;
  hasHardwareSetup: boolean;
  floog: Frequency;
  tuneHigh: boolean;
  BaseBandSpecification: IBaseBandSpecification[];
  receiverBand: string;
  dopplerReference: string;
}
