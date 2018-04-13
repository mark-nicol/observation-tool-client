import {ICalibrationSetupParameters} from './calibration-setup-parameters.interface';
import {IPerformanceParameters} from './performance-parameters.interface';
import {ISpectralSetupParameters} from './spectral-setup-parameters-interface';
import {ITargetParameters} from './target-parameters.interface';
import {ITechnicalJustification} from './technical-justification.interface';

export interface IScienceGoal {
  prj_name: string;
  prj_note: string;
  prj_estimatedTotalTime: number;
  prj_userPriority: number;
  prj_requiredReceiverBands: string;
  prj_estimated12mTime: number;
  prj_estimated7mTime: number;
  prj_estimatedTPTime: number;
  prj_estimatedACATime: number;
  mode: string;
  prj_isDescoped: boolean;
  prj_isResubmission: boolean;
  prj_resubmissionOfOusStatusUid: string;
  prj_resubmissionOfName: string;
  prj_CalibrationSetupParameters: ICalibrationSetupParameters;
  prj_PerformanceParameters: IPerformanceParameters;
  prj_SpectralSetupParameters: ISpectralSetupParameters;
  prj_TargetParameters: ITargetParameters[];
  prj_TechnicalJustifications: ITechnicalJustification[];
}
