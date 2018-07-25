// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IACASpectralWindow} from './aca-spectral-window.interface';
import {IAbstractBaseBandConfig} from './abstract-baseband-config.interface';
import {Frequency} from '../../../../units/classes/frequency';

export interface IACABaseBandConfig extends IAbstractBaseBandConfig {
  centerFreqOfResidualDelay: Frequency;
  ACASpectralWindow: IACASpectralWindow[];
}
