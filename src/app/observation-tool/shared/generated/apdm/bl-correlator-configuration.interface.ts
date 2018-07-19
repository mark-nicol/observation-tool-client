import {ITimeT} from './test';
import {IAbstractCorrelatorConfigurationT} from './abstract-correlator-configuration.interface';
import {IBLBaseBandConfigT} from './bl-base-band-config.interface';

export interface IBLCorrelatorConfigurationT extends IAbstractCorrelatorConfigurationT {
  dumpDuration: ITimeT;
  BLBaseBandConfig: IBLBaseBandConfigT[];
}
