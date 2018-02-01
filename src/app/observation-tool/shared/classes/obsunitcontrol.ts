import {IObsUnitControl} from '../interfaces/project/obsunitcontrol.interface';

export class ObsUnitControl implements IObsUnitControl {

  arrayRequested: string;
  userPriority: number;
  tacPriority: number;
  aggregatedExecutionCount: number;

  constructor(arrayRequested?: string,
              userPriority?: number,
              tacPriority?: number,
              aggregatedExecutionCount?: number) {
    this.arrayRequested           = arrayRequested;
    this.userPriority             = userPriority;
    this.tacPriority              = tacPriority;
    this.aggregatedExecutionCount = aggregatedExecutionCount;
  }

}
