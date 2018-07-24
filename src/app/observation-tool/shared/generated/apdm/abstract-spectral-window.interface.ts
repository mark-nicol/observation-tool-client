// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {ISpectralLine} from './spectral-line.interface';
import {IFrequencyT} from './test';

export interface IAbstractSpectralWindow {
  centerFrequency: IFrequencyT;
  spectralAveragingFactor: number;
  name: string;
  effectiveBandwidth: IFrequencyT;
  effectiveNumberOfChannels: number;
  associatedSpectralWindowNumberInPair: number;
  useThisSpectralWindow: boolean;
  desiredCenterFrequency: IFrequencyT;
  SpectralLine: ISpectralLine[];
  sideBand: string;
  windowFunction: string;
  polnProducts: string;
}
