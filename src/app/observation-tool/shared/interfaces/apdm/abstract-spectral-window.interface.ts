// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {ISpectralLine} from './spectral-line.interface';
import {Frequency} from '../../../../units/classes/frequency';

export interface IAbstractSpectralWindow {
  centerFrequency: Frequency;
  spectralAveragingFactor: number;
  name: string;
  effectiveBandwidth: Frequency;
  effectiveNumberOfChannels: number;
  associatedSpectralWindowNumberInPair: number;
  useThisSpectralWindow: boolean;
  desiredCenterFrequency: Frequency;
  SpectralLine: ISpectralLine[];
  sideBand: string;
  windowFunction: string;
  polnProducts: string;
}
