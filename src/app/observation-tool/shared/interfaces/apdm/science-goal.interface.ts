// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IAbstractScienceGoal} from './abstract-science-goal.interface';
import {
  ITimeT
} from '../test';
import {ICalibrationSetupParameters} from './calibration-setup-parameters.interface';
import {ISpectralSetupParameters} from './spectral-setup-parameters.interface';
import {IPerformanceParameters} from './performance-parameters.interface';
import {ITargetParameters} from './target-parameters.interface';
import {ITechnicalJustification} from './technical-justification.interface';

export interface IScienceGoal extends IAbstractScienceGoal {
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
  CalibrationSetupParameters: ICalibrationSetupParameters;
  PerformanceParameters: IPerformanceParameters;
  SpectralSetupParameters: ISpectralSetupParameters;
  TargetParameters: ITargetParameters[];
  TechnicalJustification: ITechnicalJustification[];
  mode: string;
}
