import {Frequency} from '../../../../../units/classes/frequency';

export interface ISpectralSetupParameters {
  polarisation: string;
  type: string;
  representativeFrequency: Frequency;
  userRepresentativeFrequency: boolean;
  singleContinuumFrequency: Frequency;
  AdvancedSpectralSetup: IAdvancedSpectralSetup;
  ScienceSpectralWindow: IScienceSpectralWindow[];
}

export interface IAdvancedSpectralSetup {
  sideBandsSeparation: boolean;
  fastMode: boolean;
}

export interface IScienceSpectralWindow {
  index: number;
  transitionName: string;
  centerFrequency: Frequency;
  bandwidth: Frequency;
  spectralResolution: Frequency;
  groupIndex: number;
  groupResourceUse: string;
  isSkyFrequency: boolean;
  splataogld: number;
  representativeWindow: boolean;
  AdvancedWindowSetup: IAdvancedWindowSetup;
}

export interface IAdvancedWindowSetup {
  smoothingFactor: number;
  smoothingFunction: string;
  oversampling: boolean;
  addedSensitivity: boolean;
  useImage: boolean;
  useThis: boolean;
}
