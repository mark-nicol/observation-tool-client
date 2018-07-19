import {
  IAbstractScienceSpectralWindowTUnion,
  IFrequencyT} from '../test';
import {IAdvancedSpectralSetupT} from '../advanced-spectral-setup.interface';
import {IOverlaidSpectralLineT} from '../overlaid-spectral-line.interface';

export interface ISpectralSetupParametersT {
  representativeFrequency: IFrequencyT;
  userRepresentativeFrequency: boolean;
  singleContinuumFrequency: IFrequencyT;
  spectralWindows: IAbstractScienceSpectralWindowTUnion[];
  AdvancedSpectralSetup: IAdvancedSpectralSetupT;
  OverlaidSpectralLine: IOverlaidSpectralLineT[];
  polarisation: string;
  type: string;
}
