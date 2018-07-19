import {IAbstractScienceGoalT} from './abstract-science-goal.interface';
import {
  ITimeT
} from '../test';
import {ICalibrationSetupParametersT} from './calibration-setup-parameters.interface';
import {ISpectralSetupParametersT} from './spectral-setup-parameters.interface';
import {IPerformanceParametersT} from '../performance-parameters.interface';
import {ITargetParametersT} from '../target-parameters.interface';
import {ITechnicalJustificationT} from '../technical-justification.interface';

export interface IScienceGoal extends IAbstractScienceGoalT {
  '@type': 'ScienceGoalT';
  estimatedTotalTime: ITimeT;
  userPriority: number;
  requiredReceiverBands: string[];
  estimated12mTime: ITimeT;
  estimated7mTime: ITimeT;
  estimatedTPTime: ITimeT;
  estimatedACATime: ITimeT;
  isDescoped: boolean;
  isResubmission: boolean;
  resubmissionOfOusStatusUid: string;
  resubmissionOfName: string;
  CalibrationSetupParameters: ICalibrationSetupParametersT;
  PerformanceParameters: IPerformanceParametersT;
  SpectralSetupParameters: ISpectralSetupParametersT;
  TargetParameters: ITargetParametersT[];
  TechnicalJustification: ITechnicalJustificationT[];
  mode: string;
}
