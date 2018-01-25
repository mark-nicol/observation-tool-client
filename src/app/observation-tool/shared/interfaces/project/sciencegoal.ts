import {IAlmaProjectDataModel} from './almaprojectdatamodel';

export interface IScienceGoal extends IAlmaProjectDataModel {
  name: string;
  note: string;
  estimatedTotalTime: number;
  userPriority: number;
  requiredReceiverBands: string;
  estimated12mTime: number;
  estimated7mTime: number;
  estimatedTPTime: number;
  estimatedACATime: number;
  CalibrationSetupParameters: string;
}
