import {
  IAngleT,
  IFrequencyT,
  IMonitoringConstraintT,
  ITemporalParametersT,
  ITimeT,
  IUserAngleT,
  IUserFrequencyT,
  IUserSensitivityT,
  IVisitConstraintT
} from './test';

export interface IPerformanceParametersT {
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
  MonitoringConstraint: IMonitoringConstraintT[];
  TemporalParameters: ITemporalParametersT[];
  VisitConstraint: IVisitConstraintT[];
  desiredSensitivityFrequencyMeasure: string;
  timingConstraintsType: string;
  resolutionOption: string;
}
