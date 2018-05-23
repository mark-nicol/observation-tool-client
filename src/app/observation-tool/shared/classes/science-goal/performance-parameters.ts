import {Angle} from '../../../../units/classes/angle';
import {Frequency} from '../../../../units/classes/frequency';
import {Sensitivity} from '../../../../units/classes/sensitivity';
import {IPerformanceParameters} from '../../interfaces/project/science-goal/performance-parameters.interface';

export class PerformanceParameters implements IPerformanceParameters {
  desiredSensitivityFrequencyMeasure: string;
  acceptableAngularResolution: Angle;
  desiredACASensitivity: Sensitivity;
  desiredAngularResolution: Angle;
  desiredDynamicRange: number;
  desiredLargestScale: Angle;
  desiredSDSensitivity: Sensitivity;
  desiredSensitivity: Sensitivity;
  desiredSensitivityReferenceFrequencyWidth: Frequency;
  desiredTPSensitivity: Sensitivity;
  desiredTime: string;
  isPointSource: boolean;
  isScheduleConstrained: boolean;
  isSimultaneous12and7: boolean;
  isTimeConstrained: boolean;
  needsMoreTime: boolean;
  representativeFrequency: Frequency;
  useACA: boolean;
  useTP: boolean;
  resolutionOption: string;
  timingConstraintsType: string;
}
