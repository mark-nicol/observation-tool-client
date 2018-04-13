import {ICalibrationSetupParameters} from '../../interfaces/project/science-goal/calibration-setup-parameters.interface';
import {IPerformanceParameters} from '../../interfaces/project/science-goal/performance-parameters.interface';
import {IScienceGoal} from '../../interfaces/project/science-goal/sciencegoal.interface';
import {ISpectralSetupParameters} from '../../interfaces/project/science-goal/spectral-setup-parameters-interface';
import {ITargetParameters} from '../../interfaces/project/science-goal/target-parameters.interface';
import {ITechnicalJustification} from '../../interfaces/project/science-goal/technical-justification.interface';

export class ScienceGoal implements IScienceGoal {
  mode: string;
  prj_CalibrationSetupParameters: ICalibrationSetupParameters;
  prj_PerformanceParameters: IPerformanceParameters;
  prj_SpectralSetupParameters: ISpectralSetupParameters;
  prj_TargetParameters: ITargetParameters[] | ITargetParameters;
  prj_TechnicalJustifications: ITechnicalJustification[];
  prj_estimated12mTime: number;
  prj_estimated7mTime: number;
  prj_estimatedACATime: number;
  prj_estimatedTPTime: number;
  prj_estimatedTotalTime: number;
  prj_isDescoped: boolean;
  prj_isResubmission: boolean;
  prj_name: string;
  prj_note: string;
  prj_requiredReceiverBands: string;
  prj_resubmissionOfName: string;
  prj_resubmissionOfOusStatusUid: string;
  prj_userPriority: number;
}
