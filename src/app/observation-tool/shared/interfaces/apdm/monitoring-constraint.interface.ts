// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IAbstractTimingConstraints} from './abstract-timing-constraints.interface';
import {Time} from '../../../../units/classes/time';

export interface IMonitoringConstraint extends IAbstractTimingConstraints {
  monitoringLength: Time;
  cycleTime: Time;
  requiredDelay: Time;
}
