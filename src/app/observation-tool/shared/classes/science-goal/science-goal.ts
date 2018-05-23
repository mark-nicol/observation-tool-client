import {ICalibrationSetupParameters} from '../../interfaces/project/science-goal/calibration-setup-parameters.interface';
import {IPerformanceParameters} from '../../interfaces/project/science-goal/performance-parameters.interface';
import {IScienceGoal} from '../../interfaces/project/science-goal/sciencegoal.interface';
import {ISpectralSetupParameters} from '../../interfaces/project/science-goal/spectral-setup-parameters-interface';
import {ITargetParameters} from '../../interfaces/project/science-goal/target-parameters.interface';
import {ITechnicalJustification} from '../../interfaces/project/science-goal/technical-justification.interface';

export class ScienceGoal implements IScienceGoal {
  mode: string;
  CalibrationSetupParameters: ICalibrationSetupParameters;
  PerformanceParameters: IPerformanceParameters;
  SpectralSetupParameters: ISpectralSetupParameters;
  TargetParameters: ITargetParameters[];
  TechnicalJustifications: ITechnicalJustification[];
  estimated12mTime: number;
  estimated7mTime: number;
  estimatedACATime: number;
  estimatedTPTime: number;
  estimatedTotalTime: number;
  isDescoped: boolean;
  isResubmission: boolean;
  name: string;
  note: string;
  requiredReceiverBands: string;
  resubmissionOfName: string;
  resubmissionOfOusStatusUid: string;
  userPriority: number;

  constructor() {
    this.name = 'New Goal';
  }
}
