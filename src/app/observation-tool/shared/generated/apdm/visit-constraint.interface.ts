import {ITimeT} from './test';
import {IAbstractTimingConstraintsT} from './abstract-timing-constraints.interface';

export interface IVisitConstraintT extends IAbstractTimingConstraintsT {
  visitId: number;
  previousVisitId: number;
  requiredDelay: ITimeT;
}
