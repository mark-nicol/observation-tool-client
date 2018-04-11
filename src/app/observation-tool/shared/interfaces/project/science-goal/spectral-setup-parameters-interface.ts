import {Frequency} from '../../../../../units/classes/frequency';

export interface ISpectralSetupParameters {
  polarisation: string;
  type: string;
  prj_representativeFrequency: Frequency;
  prj_userRepresentativeFrequency: boolean;
  prj_singleContinuumFrequency: Frequency;
  prj_AdvancedSpectralSetup: IAdvancedSpectralSetup;
  prj_ScienceSpectralWindow: IScienceSpectralWindow[];
}

export interface IAdvancedSpectralSetup {
  prj_sideBandsSeparation: boolean;
  prj_fastMode: boolean;
}

export interface IScienceSpectralWindow {
  prj_index: number;
  prj_transitionName: string;
  prj_centerFrequency: Frequency;
  prj_bandwidth: Frequency;
  prj_spectralResolution: Frequency;
  prj_groupIndex: number;
  groupResourceUse: string;
  prj_isSkyFrequency: boolean;
  prj_representativeWindow: boolean;
  prj_AdvancedWindowSetup: IAdvancedWindowSetup;
}

export interface IAdvancedWindowSetup {
  prj_smoothingFactor: number;
  smoothingFunction: string;
  prj_oversampling: boolean;
  prj_addedSensitivity: boolean;
  prj_useImage: boolean;
  prj_useThis: boolean;
}
