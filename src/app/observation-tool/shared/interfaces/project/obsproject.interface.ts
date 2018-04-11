import {IObsProgram} from './obsprogram.interface';

export interface IObsProject {
  prj_status: string;
  prj_revision: number;
  prj_projectName: string;
  prj_pI: string;
  prj_version: string;
  prj_code: string;
  prj_timeOfCreation: string;
  prj_manualMode: boolean;
  prj_simulationMode: boolean;
  prj_isCommissioning: boolean;
  prj_isCalibration: boolean;
  prj_letterGrade: string;
  prj_staffProjectNote: string;
  prj_taPhase2Comments: string;
  prj_taMainComments: string;
  prj_consensusReport: string;
  prj_p2gAttention: boolean;
  prj_p2gAttentionReasons: string;
  prj_ObsProgram: IObsProgram;
}
