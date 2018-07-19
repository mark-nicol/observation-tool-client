import {IBLSpectralWindowT} from './bl-spectral-window.interface';
import {IAbstractBaseBandConfigT} from './abstract-baseband-config.interface';

export interface IBLBaseBandConfigT extends IAbstractBaseBandConfigT {
  BLSpectralWindow: IBLSpectralWindowT[];
}
