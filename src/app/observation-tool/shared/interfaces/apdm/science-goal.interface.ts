import {Time} from '../../../../units/classes/time';
import {
  ITechnicalJustification
} from './technical-justification.interface';
import {ICalibrationSetupParameters} from './calibration-setup-parameters.interface';
import {IPerformanceParameters} from './performance-parameters.interface';
import {ISpectralSetupParameters} from './spectral-setup-parameters.interface';
import {ITargetParameters} from './target-parameters.interface';

export interface IScienceGoal {
  estimatedTotalTime: Time;
  userPriority: number;
  requiredReceiverBands?: (string)[] | null;
  estimated12MTime: Time;
  estimated7MTime: Time;
  estimatedTPTime: Time;
  estimatedACATime: Time;
  isDescoped: boolean;
  calibrationSetupParameters: ICalibrationSetupParameters;
  performanceParameters: IPerformanceParameters;
  spectralSetupParameters: ISpectralSetupParameters;
  targetParameters?: (ITargetParameters)[] | null;
  technicalJustification?: (ITechnicalJustification)[] | null;
  mode: string;
  name: string;
  note: string;
}
