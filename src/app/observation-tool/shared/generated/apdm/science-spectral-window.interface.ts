// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IAbstractScienceSpectralWindow} from './abstract-science-spectral-window.interface';
import {IFrequencyT, IUserFrequencyT} from './test';

export interface IScienceSpectralWindow extends IAbstractScienceSpectralWindow {
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
