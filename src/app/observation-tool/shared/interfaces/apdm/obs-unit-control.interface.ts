import {Time} from '../../../../units/classes/time';
import {ICalibrationRequirements} from './calibration-requirements.interface';

export interface IObsUnitControl {
  calibrationRequirements: ICalibrationRequirements;
  maximumTime: Time;
  userPriority: number;
  estimatedExecutionTime: Time;
  tacPriority: number;
  aggregatedExecutionCount: number;
  arrayRequested: string;
}
