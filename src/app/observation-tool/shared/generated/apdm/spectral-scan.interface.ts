import {IAbstractScienceSpectralWindowT} from './abstract-science-spectral-window.interface';
import {IFrequencyT, IUserFrequencyT} from './test';

export interface ISpectralScanT extends IAbstractScienceSpectralWindowT {
  '@type': 'SpectralScanT';
  startFrequency: IFrequencyT;
  endFrequency: IFrequencyT;
  bandWidth: IUserFrequencyT;
  spectralResolution: IFrequencyT;
  isSkyFrequency: boolean;
}
