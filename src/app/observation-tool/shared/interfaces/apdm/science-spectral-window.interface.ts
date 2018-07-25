// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IAbstractScienceSpectralWindow} from './abstract-science-spectral-window.interface';
import {UserFrequency} from '../../../../units/classes/user-frequency';
import {Frequency} from '../../../../units/classes/frequency';

export interface IScienceSpectralWindow extends IAbstractScienceSpectralWindow {
  '@type': 'ScienceSpectralWindowT';
  transitionName: string;
  centerFrequency: Frequency;
  bandWidth: UserFrequency;
  spectralResolution: UserFrequency;
  groupIndex: number;
  isSkyFrequency: boolean;
  splatalogId: number;
  representativeWindow: boolean;
  groupResourceUse: string;
}
