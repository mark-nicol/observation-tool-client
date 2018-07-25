// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IAbstractCorrelatorConfiguration} from './abstract-correlator-configuration.interface';
import {IACABaseBandConfig} from './aca-baseband-config.interface';
import {IACAPhaseSwitchingConfiguration} from './aca-phase-switching-configuration.interface';

export interface IACACorrelatorConfiguration extends IAbstractCorrelatorConfiguration {
  ACABaseBandConfig: IACABaseBandConfig[];
  ACAPhaseSwitchingConfiguration: IACAPhaseSwitchingConfiguration;
}
