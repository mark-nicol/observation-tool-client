import {
  IAbstractScienceSpectralWindowTUnion,
  IAdvancedSpectralSetupT,
  IFrequencyT,
  IOverlaidSpectralLineT
} from '../test';

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
