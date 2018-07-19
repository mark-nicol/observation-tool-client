import {ITimeT} from './test';
import {IAbstractTimingConstraintsT} from './abstract-timing-constraints.interface';

export interface IMonitoringConstraintT extends IAbstractTimingConstraintsT {
  monitoringLength: ITimeT;
  cycleTime: ITimeT;
  requiredDelay: ITimeT;
}
