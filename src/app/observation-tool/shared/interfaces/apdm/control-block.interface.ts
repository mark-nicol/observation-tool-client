// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {Time} from '../../../../units/classes/time';

export interface IControlBlock {
  maximumTime: Time;
  userPriority: number;
  estimatedExecutionTime: Time;
  tacPriority: number;
  aggregatedExecutionCount: number;
  arrayRequested: string;
}
