// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IMonitoringConstraint} from './monitoring-constraint.interface';
import {ITemporalParameters} from './temporal-parameters.interface';
import {IVisitConstraint} from './visit-constraint.interface';
import {Angle} from '../../../../units/classes/angle';
import {UserAngle} from '../../../../units/classes/user-angle';
import {UserSensitivity} from '../../../../units/classes/user-sensitivity';
import {Frequency} from '../../../../units/classes/frequency';
import {UserFrequency} from '../../../../units/classes/user-frequency';
import {Time} from '../../../../units/classes/time';

export interface IPerformanceParameters {
  desiredAngularResolution: UserAngle;
  desiredLargestScale: Angle;
  desiredSensitivity: UserSensitivity;
  desiredDynamicRange: number;
  representativeFrequency: Frequency;
  useACA: boolean;
  isTimeConstrained: boolean;
  useTP: boolean;
  desiredSDSensitivity: UserSensitivity;
  isPointSource: boolean;
  desiredSensitivityReferenceFrequencyWidth: UserFrequency;
  needsMoreTime: boolean;
  desiredACASensitivity: UserSensitivity;
  desiredTPSensitivity: UserSensitivity;
  isScheduleConstrained: boolean;
  desiredTime: Time;
  acceptableAngularResolution: UserAngle;
  isSimultaneous12and7: boolean;
  MonitoringConstraint: IMonitoringConstraint[];
  TemporalParameters: ITemporalParameters[];
  VisitConstraint: IVisitConstraint[];
  desiredSensitivityFrequencyMeasure: string;
  timingConstraintsType: string;
  resolutionOption: string;
}
