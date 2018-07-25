// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IAbstractScienceGoal} from './abstract-science-goal.interface';
import {ICalibrationSetupParameters} from './calibration-setup-parameters.interface';
import {ISpectralSetupParameters} from './spectral-setup-parameters.interface';
import {IPerformanceParameters} from './performance-parameters.interface';
import {ITargetParameters} from './target-parameters.interface';
import {ITechnicalJustification} from './technical-justification.interface';
import {Time} from '../../../../units/classes/time';

export interface IScienceGoal extends IAbstractScienceGoal {
  '@type': 'ScienceGoalT';
  estimatedTotalTime: Time;
  userPriority: number;
  requiredReceiverBands: string[];
  estimated12mTime: Time;
  estimated7mTime: Time;
  estimatedTPTime: Time;
  estimatedACATime: Time;
  isDescoped: boolean;
  isResubmission: boolean;
  resubmissionOfOusStatusUid: string;
  resubmissionOfName: string;
  calibrationSetupParameters: ICalibrationSetupParameters;
  performanceParameters: IPerformanceParameters;
  spectralSetupParameters: ISpectralSetupParameters;
  targetParameters: ITargetParameters[];
  technicalJustification: ITechnicalJustification[];
  mode: string;
}
