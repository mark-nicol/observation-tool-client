import {ISpectralLineT} from './spectral-line.interface';
import {IFrequencyT} from './test';

export interface IAbstractSpectralWindowT {
  centerFrequency: IFrequencyT;
  spectralAveragingFactor: number;
  name: string;
  effectiveBandwidth: IFrequencyT;
  effectiveNumberOfChannels: number;
  associatedSpectralWindowNumberInPair: number;
  useThisSpectralWindow: boolean;
  desiredCenterFrequency: IFrequencyT;
  SpectralLine: ISpectralLineT[];
  sideBand: string;
  windowFunction: string;
  polnProducts: string;
}
