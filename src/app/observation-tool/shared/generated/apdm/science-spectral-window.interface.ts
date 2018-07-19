import {IAbstractScienceSpectralWindowT} from './abstract-science-spectral-window.interface';
import {IFrequencyT, IUserFrequencyT} from './test';

export interface IScienceSpectralWindowT extends IAbstractScienceSpectralWindowT {
  '@type': 'ScienceSpectralWindowT';
  transitionName: string;
  centerFrequency: IFrequencyT;
  bandWidth: IUserFrequencyT;
  spectralResolution: IUserFrequencyT;
  groupIndex: number;
  isSkyFrequency: boolean;
  splatalogId: number;
  representativeWindow: boolean;
  groupResourceUse: string;
}
