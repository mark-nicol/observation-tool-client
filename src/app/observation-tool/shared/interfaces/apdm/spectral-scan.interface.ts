// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IAbstractScienceSpectralWindow} from './abstract-science-spectral-window.interface';
import {IFrequencyT, IUserFrequencyT} from './test';

export interface ISpectralScan extends IAbstractScienceSpectralWindow {
  '@type': 'SpectralScanT';
  startFrequency: IFrequencyT;
  endFrequency: IFrequencyT;
  bandWidth: IUserFrequencyT;
  spectralResolution: IFrequencyT;
  isSkyFrequency: boolean;
}
