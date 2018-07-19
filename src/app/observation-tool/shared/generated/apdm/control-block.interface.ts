import {ITimeT} from './test';

export interface IControlBlockT {
  maximumTime: ITimeT;
  userPriority: number;
  estimatedExecutionTime: ITimeT;
  tacPriority: number;
  aggregatedExecutionCount: number;
  arrayRequested: string;
}
