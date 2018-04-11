import {IObsProgram} from '../interfaces/project/obsprogram.interface';
import {IObsProject} from '../interfaces/project/obsproject.interface';

export class ObsProject implements IObsProject {
  prj_ObsProgram: IObsProgram;
  prj_code: string;
  prj_consensusReport: string;
  prj_isCalibration: boolean;
  prj_isCommissioning: boolean;
  prj_letterGrade: string;
  prj_manualMode: boolean;
  prj_p2gAttention: boolean;
  prj_p2gAttentionReasons: string;
  prj_pI: string;
  prj_projectName: string;
  prj_revision: number;
  prj_simulationMode: boolean;
  prj_staffProjectNote: string;
  prj_status: string;
  prj_taMainComments: string;
  prj_taPhase2Comments: string;
  prj_timeOfCreation: string;
  prj_version: string;

}
