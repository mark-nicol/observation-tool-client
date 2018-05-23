import {IObsProgram} from '../interfaces/project/obsprogram.interface';
import {IObsProject} from '../interfaces/project/obsproject.interface';

export class ObsProject implements IObsProject {
  ObsProgram: IObsProgram;
  code: string;
  consensusReport: string;
  isCalibration: boolean;
  isCommissioning: boolean;
  letterGrade: string;
  manualMode: boolean;
  p2gAttention: boolean;
  p2gAttentionReasons: string;
  pI: string;
  projectName: string;
  revision: number;
  simulationMode: boolean;
  staffProjectNote: string;
  status: string;
  taMainComments: string;
  taPhase2Comments: string;
  timeOfCreation: string;
  version: string;

}
