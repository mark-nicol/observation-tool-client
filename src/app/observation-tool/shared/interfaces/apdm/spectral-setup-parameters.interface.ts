// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {Frequency} from '../../../../units/classes/frequency';
import {IAdvancedSpectralSetup} from './advanced-spectral-setup.interface';
import {IOverlaidSpectralLine} from './overlaid-spectral-line.interface';
import {IAbstractScienceSpectralWindowUnion} from './abstract-science-spectral-window.interface';

export interface ISpectralSetupParameters {
  representativeFrequency: Frequency;
  userRepresentativeFrequency: boolean;
  singleContinuumFrequency: Frequency;
  spectralWindows: IAbstractScienceSpectralWindowUnion[];
  AdvancedSpectralSetup: IAdvancedSpectralSetup;
  OverlaidSpectralLine: IOverlaidSpectralLine[];
  polarisation: string;
  type: string;
}
