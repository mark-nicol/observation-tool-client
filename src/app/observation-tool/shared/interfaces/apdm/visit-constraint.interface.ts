// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IAbstractTimingConstraints} from './abstract-timing-constraints.interface';
import {Time} from '../../../../units/classes/time';

export interface IVisitConstraint extends IAbstractTimingConstraints {
  visitId: number;
  previousVisitId: number;
  requiredDelay: Time;
}
