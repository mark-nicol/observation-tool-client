import {IAlmaProjectDataModel} from './almaprojectdatamodel';

export interface IObsUnitControl extends IAlmaProjectDataModel {
  arrayRequested: string;
  userPriority: number;
  tacPriority: number;
  aggregatedExecutionCount: number;
}
