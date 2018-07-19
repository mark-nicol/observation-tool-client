import {ITimeT} from './test';

export interface ISchedBlockControlT {
  sBMaximumTime: ITimeT;
  indefiniteRepeat: boolean;
  executionCount: number;
  runQuicklook: boolean;
}
