import {Frequency} from '../../../../../units/classes/frequency';
import {IAlmaProjectDataModel} from '../almaprojectdatamodel.interface';

export interface IAdvancedSpectralSetup extends IAlmaProjectDataModel {
  sideBandsSeparation: boolean;
  fastMode: boolean;
}

export interface IScienceSpectralWindow extends IAlmaProjectDataModel {
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

export interface IAdvancedWindowSetup extends IAlmaProjectDataModel {
  smoothingFactor: number;
  smoothingFunction: string;
  oversampling: boolean;
  addedSensitivity: boolean;
  useImage: boolean;
  useThis: boolean;
}

export interface ISpectralSetupParameters extends IAlmaProjectDataModel {
  polarisation: string;
  type: string;
  representativeFrequency: Frequency;
  userRepresentativeFrequency: boolean;
  singleContinuumFrequency: Frequency;
  AdvancedSpectralSetup: IAdvancedSpectralSetup;
  ScienceSpectralWindow: IScienceSpectralWindow;
}
