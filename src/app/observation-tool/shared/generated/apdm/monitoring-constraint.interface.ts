// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {ITimeT} from './test';
import {IAbstractTimingConstraints} from './abstract-timing-constraints.interface';

export interface IMonitoringConstraint extends IAbstractTimingConstraints {
  monitoringLength: ITimeT;
  cycleTime: ITimeT;
  requiredDelay: ITimeT;
}
