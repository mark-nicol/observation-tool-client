// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IAbstractCorrelatorConfiguration} from './abstract-correlator-configuration.interface';
import {IBLBaseBandConfig} from './bl-base-band-config.interface';
import {Time} from '../../../../units/classes/time';

export interface IBLCorrelatorConfiguration extends IAbstractCorrelatorConfiguration {
  dumpDuration: Time;
  BLBaseBandConfig: IBLBaseBandConfig[];
}
