import {IFrequencyT} from './test';
import {IBaseBandSpecificationT} from './baseband-configuration.interface';

export interface IFrequencySetupT {
  restFrequency: IFrequencyT;
  transitionName: string;
  lO1Frequency: IFrequencyT;
  isUserSpecifiedLO1: boolean;
  hasHardwareSetup: boolean;
  floog: IFrequencyT;
  tuneHigh: boolean;
  BaseBandSpecification: IBaseBandSpecificationT[];
  receiverBand: string;
  dopplerReference: string;
}
