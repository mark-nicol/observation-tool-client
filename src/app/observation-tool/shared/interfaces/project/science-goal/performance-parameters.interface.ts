import {Angle} from '../../../../../units/classes/angle';
import {Frequency} from '../../../../../units/classes/frequency';
import {Sensitivity} from '../../../../../units/classes/sensitivity';

export interface IPerformanceParameters {
  desiredAngularResolution: Angle;
  desiredLargestScale: Angle;
  desiredSensitivity: Sensitivity;
  desiredDynamicRange: number;
  representativeFrequency: Frequency;
  useACA: boolean;
  isTimeConstrained: boolean;
  useTP: boolean;
  desiredSDSensitivity: Sensitivity;
  isPointSource: boolean;
  desiredSensitivityReferenceFrequencyWidth: Frequency;
  desiredSensitivityFrequencyMeasure: string;
  needsMoreTime: boolean;
  desiredACASensitivity: Sensitivity;
  desiredTPSensitivity: Sensitivity;
  isScheduleConstrained: boolean;
  desiredTime: string;
  timingConstraintsType: string;
  acceptableAngularResolution: Angle;
  resolutionOption: string;
  isSimultaneous12and7: boolean;
}
