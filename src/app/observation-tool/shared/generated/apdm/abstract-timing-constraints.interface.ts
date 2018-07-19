import {ITimeT} from './test';

export interface IAbstractTimingConstraintsT {
  startTime: string;
  endTime: string;
  allowedMargin: ITimeT;
  repeats: number;
  lSTMin: string;
  lSTMax: string;
  note: string;
  isAvoidConstraint: boolean;
  priority: number;
  isFixedStart: boolean;
}
