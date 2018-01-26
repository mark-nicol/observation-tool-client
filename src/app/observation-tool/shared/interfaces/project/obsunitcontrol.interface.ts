import {IAlmaProjectDataModel} from './almaprojectdatamodel.interface';

export interface IObsUnitControl extends IAlmaProjectDataModel {
  arrayRequested: string;
  userPriority: number;
  tacPriority: number;
  aggregatedExecutionCount: number;
}
