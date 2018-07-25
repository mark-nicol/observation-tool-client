// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IAbstractScienceSpectralWindow} from './abstract-science-spectral-window.interface';
import {Frequency} from '../../../../units/classes/frequency';
import {UserFrequency} from '../../../../units/classes/user-frequency';

export interface ISpectralScan extends IAbstractScienceSpectralWindow {
  '@type': 'SpectralScanT';
  startFrequency: Frequency;
  endFrequency: Frequency;
  bandWidth: UserFrequency;
  spectralResolution: Frequency;
  isSkyFrequency: boolean;
}
