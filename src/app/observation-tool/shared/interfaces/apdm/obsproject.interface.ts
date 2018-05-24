export interface IObsProject {
  obsProjectEntity: ObsProjectEntity;
  obsProposalRef: OusStatusRefOrObsProjectRefOrObsProposalRefOrProjectStatusRef;
  projectStatusRef: OusStatusRefOrObsProjectRefOrObsProposalRefOrProjectStatusRef;
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
  obsProgram: ObsProgram;
  submissionRecord?: (SubmissionRecordEntity)[] | null;
  schemaVersion: string;
  revision: string;
  almatype: string;
  status: string;
}
export interface ObsProjectEntity {
  entityId: string;
  entityIdEncrypted: string;
  entityTypeName: string;
  schemaVersion: string;
  documentVersion: string;
  timestamp: string;
}
export interface OusStatusRefOrObsProjectRefOrObsProposalRefOrProjectStatusRef {
  entityId: string;
  entityTypeName: string;
  documentVersion: string;
}
export interface ObsProgram {
  obsPlan: ObsPlan;
}
export interface ObsPlan {
  scienceProcessingScript: string;
  runSciencePipeline: boolean;
  dataProcessingParameters: DataProcessingParameters;
  flowControl: FlowControl;
  ousStatusRef: OusStatusRefOrObsProjectRefOrObsProposalRefOrProjectStatusRef;
  entityPartId: string;
  almatype: string;
  name: string;
  note: string;
  obsUnitControl: ObsUnitControl;
  unitDependencies: UnitDependencies;
  obsProjectRef: OusStatusRefOrObsProjectRefOrObsProposalRefOrProjectStatusRef;
  status: string;
}
export interface DataProcessingParameters {
  angularResolution: CenterVelocityOrAngularResolutionOrTbSensitivityGoalOrRmsGoalOrPointingAccuracyOrMaximumTimeOrEstimatedExecutionTimeOrDelay;
  velocityResolution: VelocityResolution;
  tbSensitivityGoal: CenterVelocityOrAngularResolutionOrTbSensitivityGoalOrRmsGoalOrPointingAccuracyOrMaximumTimeOrEstimatedExecutionTimeOrDelay;
  rmsGoal: CenterVelocityOrAngularResolutionOrTbSensitivityGoalOrRmsGoalOrPointingAccuracyOrMaximumTimeOrEstimatedExecutionTimeOrDelay;
  projectType: string;
}
export interface CenterVelocityOrAngularResolutionOrTbSensitivityGoalOrRmsGoalOrPointingAccuracyOrMaximumTimeOrEstimatedExecutionTimeOrDelay {
  value: number;
  unit: string;
}
export interface VelocityResolution {
  centerVelocity: CenterVelocityOrAngularResolutionOrTbSensitivityGoalOrRmsGoalOrPointingAccuracyOrMaximumTimeOrEstimatedExecutionTimeOrDelay;
  referenceSystem: string;
  dopplerCalcType: string;
}
export interface FlowControl {
  controlScript: string;
}
export interface ObsUnitControl {
  calibrationRequirements: CalibrationRequirements;
  maximumTime: CenterVelocityOrAngularResolutionOrTbSensitivityGoalOrRmsGoalOrPointingAccuracyOrMaximumTimeOrEstimatedExecutionTimeOrDelay;
  userPriority: number;
  estimatedExecutionTime: CenterVelocityOrAngularResolutionOrTbSensitivityGoalOrRmsGoalOrPointingAccuracyOrMaximumTimeOrEstimatedExecutionTimeOrDelay;
  tacPriority: number;
  aggregatedExecutionCount: number;
  arrayRequested: string;
}
export interface CalibrationRequirements {
  pointingAccuracy: CenterVelocityOrAngularResolutionOrTbSensitivityGoalOrRmsGoalOrPointingAccuracyOrMaximumTimeOrEstimatedExecutionTimeOrDelay;
  bandpassAccuracy: number;
  polarizationAccuracy: number;
}
export interface UnitDependencies {
  executionCount: number;
  delay: CenterVelocityOrAngularResolutionOrTbSensitivityGoalOrRmsGoalOrPointingAccuracyOrMaximumTimeOrEstimatedExecutionTimeOrDelay;
  expression: string;
}
export interface SubmissionRecordEntity {
  submitter: string;
  submissionTime: string;
}
