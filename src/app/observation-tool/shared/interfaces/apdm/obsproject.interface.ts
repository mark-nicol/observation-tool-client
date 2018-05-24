import {Angle} from '../../../../units/classes/angle';
import {Sensitivity} from '../../../../units/classes/sensitivity';
import {Speed} from '../../../../units/classes/speed';
import {Temperature} from '../../../../units/classes/temperature';
import {Time} from '../../../../units/classes/time';

export interface IObsProject {
  obsProjectEntity: IEntity;
  obsProposalRef: IEntityRef;
  projectStatusRef: IEntityRef;
  projectName: string;
  pi: string;
  version: string;
  code: string;
  assignedPriority: number;
  timeOfCreation: string;
  manualMode: boolean;
  simulationMode: boolean;
  isCommissioning: boolean;
  isCalibration: boolean;
  letterGrade: string;
  scientificRank: number;
  scientificScore: number;
  staffProjectNote: string;
  taPhase2Comments: string;
  taMainComments: string;
  consensusReport: string;
  obsProgram: IObsProgram;
  submissionRecord?: (ISubmissionRecord)[] | null;
  schemaVersion: string;
  revision: string;
  almatype: string;
  status: string;
}
export interface IEntity {
  entityId: string;
  entityIdEncrypted: string;
  entityTypeName: string;
  schemaVersion: string;
  documentVersion: string;
  timestamp: string;
}
export interface IEntityRef {
  entityId: string;
  entityTypeName: string;
  documentVersion: string;
}
export interface IObsProgram {
  obsPlan: IObsPlan;
}
export interface IObsPlan {
  scienceProcessingScript: string;
  runSciencePipeline: boolean;
  dataProcessingParameters: IDataProcessingParameters;
  flowControl: IFlowControl;
  ousStatusRef?: IEntityRef | null;
  entityPartId: string;
  almatype: string;
  name: string;
  note: string;
  obsUnitControl: IObsUnitControl;
  unitDependencies: IUnitDependencies;
  obsProjectRef?: IEntityRef | null;
  status: string;
}
export interface IDataProcessingParameters {
  angularResolution: Angle;
  velocityResolution: IVelocity;
  tbSensitivityGoal: Temperature;
  rmsGoal: Sensitivity;
  projectType: string;
}

export interface IVelocity {
  centerVelocity: Speed;
  referenceSystem: string;
  dopplerCalcType: string;
}
export interface IFlowControl {
  controlScript: string;
}
export interface IObsUnitControl {
  calibrationRequirements: ICalibrationRequirements;
  maximumTime: Time;
  userPriority: number;
  estimatedExecutionTime: Time;
  tacPriority: number;
  aggregatedExecutionCount: number;
  arrayRequested: string;
}
export interface ICalibrationRequirements {
  pointingAccuracy: Angle;
  bandpassAccuracy: number;
  polarizationAccuracy: number;
}
export interface IUnitDependencies {
  executionCount: number;
  delay: Time;
  expression: string;
}
export interface ISubmissionRecord {
  submitter: string;
  submissionTime: string;
}
