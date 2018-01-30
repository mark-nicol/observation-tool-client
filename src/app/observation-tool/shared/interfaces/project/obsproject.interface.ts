import {IObsProgram} from './obsprogram.interface';

export interface IObsProject {
  status: string;
  revision: number;
  projectName: string;
  pI: string;
  version: string;
  code: string;
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
  ObsProgram: IObsProgram;
}
