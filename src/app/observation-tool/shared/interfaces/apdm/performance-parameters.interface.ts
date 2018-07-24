// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {
  IAngleT,
  IFrequencyT,
  ITimeT,
  IUserAngleT,
  IUserFrequencyT,
  IUserSensitivityT} from './test';
import {IMonitoringConstraint} from './monitoring-constraint.interface';
import {ITemporalParameters} from './temporal-parameters.interface';
import {IVisitConstraint} from './visit-constraint.interface';

export interface IPerformanceParameters {
  desiredAngularResolution: IUserAngleT;
  desiredLargestScale: IAngleT;
  desiredSensitivity: IUserSensitivityT;
  desiredDynamicRange: number;
  representativeFrequency: IFrequencyT;
  useACA: boolean;
  isTimeConstrained: boolean;
  useTP: boolean;
  desiredSDSensitivity: IUserSensitivityT;
  isPointSource: boolean;
  desiredSensitivityReferenceFrequencyWidth: IUserFrequencyT;
  needsMoreTime: boolean;
  desiredACASensitivity: IUserSensitivityT;
  desiredTPSensitivity: IUserSensitivityT;
  isScheduleConstrained: boolean;
  desiredTime: ITimeT;
  acceptableAngularResolution: IUserAngleT;
  isSimultaneous12and7: boolean;
  MonitoringConstraint: IMonitoringConstraint[];
  TemporalParameters: ITemporalParameters[];
  VisitConstraint: IVisitConstraint[];
  desiredSensitivityFrequencyMeasure: string;
  timingConstraintsType: string;
  resolutionOption: string;
}
