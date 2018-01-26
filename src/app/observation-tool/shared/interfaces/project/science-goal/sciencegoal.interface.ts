import {IAlmaProjectDataModel} from '../almaprojectdatamodel.interface';
import {ICalibrationSetupParameters} from './calibration-setup-parameters.interface';
import {IPerformanceParameters} from './performance-parameters.interface';
import {ISpectralSetupParameters} from './spectral-setup-parameters-interface';
import {ITargetParameters} from './target-parameters.interface';
import {ITechnicalJustification} from './technical-justification.interface';

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
  mode: string;
  isDescoped: boolean;
  isResubmission: boolean;
  resubmissionOfOusStatusUid: string;
  resubmissionOfName: string;
  CalibrationSetupParameters: ICalibrationSetupParameters;
  PerformanceParameters: IPerformanceParameters;
  SpectralSetupParameters: ISpectralSetupParameters;
  TargetParameters: ITargetParameters[];
  TechnicalJustifications: ITechnicalJustification[];
}
