import {IAbstractCorrelatorConfigurationT} from './abstract-correlator-configuration.interface';
import {IACABaseBandConfigT} from './aca-baseband-config.interface';
import {IACAPhaseSwitchingConfigurationT} from './aca-phase-switching-configuration.interface';

export interface IACACorrelatorConfigurationT extends IAbstractCorrelatorConfigurationT {
  ACABaseBandConfig: IACABaseBandConfigT[];
  ACAPhaseSwitchingConfiguration: IACAPhaseSwitchingConfigurationT;
}
