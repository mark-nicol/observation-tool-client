import {IFrequencyT} from './test';
import {IACASpectralWindowT} from './aca-spectral-window.interface';
import {IAbstractBaseBandConfigT} from './abstract-baseband-config.interface';

export interface IACABaseBandConfigT extends IAbstractBaseBandConfigT {
  centerFreqOfResidualDelay: IFrequencyT;
  ACASpectralWindow: IACASpectralWindowT[];
}
