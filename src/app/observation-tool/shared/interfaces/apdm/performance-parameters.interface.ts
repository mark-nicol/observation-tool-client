import {UserAngle} from '../../../../units/classes/user-angle';
import {Angle} from '../../../../units/classes/angle';
import {UserSensitivity} from '../../../../units/classes/user-sensitivity';
import {Frequency} from '../../../../units/classes/frequency';
import {UserFrequency} from '../../../../units/classes/user-frequency';
import {Time} from '../../../../units/classes/time';

export interface IPerformanceParameters {
  desiredAngularResolution: UserAngle;
  desiredLargestScale: Angle;
  desiredSensitivity: UserSensitivity;
  desiredDynamicRange: number;
  representativeFrequency?: Frequency | null;
  useACA: boolean;
  isTimeConstrained: boolean;
  useTP: boolean;
  desiredSDSensitivity?: UserSensitivity | null;
  isPointSource: boolean;
  desiredSensitivityReferenceFrequencyWidth: UserFrequency;
  needsMoreTime: boolean;
  desiredACASensitivity?: UserSensitivity | null;
  desiredTPSensitivity?: UserSensitivity | null;
  isScheduleConstrained?: boolean;
  desiredTime?: Time | null;
  desiredSensitivityFrequencyMeasure: string;
}
