export interface ObsProject {
  projectName: string;
  pI: string;
  version: string;
  code: string;
  assignedPriority: number;
  timeOfCreation: string;
  manualMode: boolean;
  simulationMode: boolean;
  isCommissioning: boolean;
  isCalibration: boolean;
  letterGrade: string;
  staffProjectNote: string;
  taPhase2Comments: string;
  taMainComments: string;
  consensusReport: string;
  p2gAttention: boolean;
  p2gAttentionReasons: string;
}
