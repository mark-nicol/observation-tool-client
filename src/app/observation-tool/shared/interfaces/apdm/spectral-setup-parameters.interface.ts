// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {
  IFrequencyT} from '../test';
import {IAdvancedSpectralSetupT} from '../advanced-spectral-setup.interface';
import {IOverlaidSpectralLineT} from '../overlaid-spectral-line.interface';
import {IAbstractScienceSpectralWindowTUnion} from './abstract-science-spectral-window.interface';

export interface ISpectralSetupParameters {
  representativeFrequency: IFrequencyT;
  userRepresentativeFrequency: boolean;
  singleContinuumFrequency: IFrequencyT;
  spectralWindows: IAbstractScienceSpectralWindowUnion[];
  AdvancedSpectralSetup: IAdvancedSpectralSetupT;
  OverlaidSpectralLine: IOverlaidSpectralLineT[];
  polarisation: string;
  type: string;
}
