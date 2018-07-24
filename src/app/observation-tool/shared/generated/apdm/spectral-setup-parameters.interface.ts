// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {
  IAbstractScienceSpectralWindowTUnion,
  IFrequencyT} from '../test';
import {IAdvancedSpectralSetupT} from '../advanced-spectral-setup.interface';
import {IOverlaidSpectralLineT} from '../overlaid-spectral-line.interface';

export interface ISpectralSetupParameters {
  representativeFrequency: IFrequencyT;
  userRepresentativeFrequency: boolean;
  singleContinuumFrequency: IFrequencyT;
  spectralWindows: IAbstractScienceSpectralWindowTUnion[];
  AdvancedSpectralSetup: IAdvancedSpectralSetupT;
  OverlaidSpectralLine: IOverlaidSpectralLineT[];
  polarisation: string;
  type: string;
}
