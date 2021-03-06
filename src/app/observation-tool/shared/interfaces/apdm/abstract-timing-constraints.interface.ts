// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {Time} from '../../../../units/classes/time';

export interface IAbstractTimingConstraints {
  startTime: string;
  endTime: string;
  allowedMargin: Time;
  repeats: number;
  lSTMin: string;
  lSTMax: string;
  note: string;
  isAvoidConstraint: boolean;
  priority: number;
  isFixedStart: boolean;
}
