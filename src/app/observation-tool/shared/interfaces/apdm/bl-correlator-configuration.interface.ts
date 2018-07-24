// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {ITimeT} from './test';
import {IAbstractCorrelatorConfiguration} from './abstract-correlator-configuration.interface';
import {IBLBaseBandConfig} from './bl-base-band-config.interface';

export interface IBLCorrelatorConfiguration extends IAbstractCorrelatorConfiguration {
  dumpDuration: ITimeT;
  BLBaseBandConfig: IBLBaseBandConfig[];
}
