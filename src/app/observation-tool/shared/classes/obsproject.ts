import {IObsProgram} from '../interfaces/project/obsprogram.interface';
import {IObsProject} from '../interfaces/project/obsproject.interface';
import {ObsProgram} from './obsprogram';

export class ObsProject implements IObsProject {

  ObsProgram: IObsProgram;

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

  constructor(projectName?: string,
              pI?: string,
              version?: string,
              code?: string,
              timeOfCreation?: string,
              manualMode?: boolean,
              simulationMode?: boolean,
              isCommissioning?: boolean,
              isCalibration?: boolean,
              letterGrade?: string,
              staffProjectNote?: string,
              taPhase2Comments?: string,
              taMainComments?: string,
              consensusReport?: string,
              p2gAttention?: boolean,
              p2gAttentionReasons?: string) {
    this.projectName         = projectName;
    this.pI                  = pI;
    this.version             = version;
    this.code                = code;
    this.timeOfCreation      = timeOfCreation;
    this.manualMode          = manualMode;
    this.simulationMode      = simulationMode;
    this.isCommissioning     = isCommissioning;
    this.isCalibration       = isCalibration;
    this.letterGrade         = letterGrade;
    this.staffProjectNote    = staffProjectNote;
    this.taPhase2Comments    = taPhase2Comments;
    this.taMainComments      = taMainComments;
    this.consensusReport     = consensusReport;
    this.p2gAttention        = p2gAttention;
    this.p2gAttentionReasons = p2gAttentionReasons;
  }

  initFromJson(json: any) {
    console.log('ObsProject', 'initFromJson');
    this.projectName         = json['prj:projectName'];
    this.pI                  = json['prj:pI'];
    this.version             = json['prj:version'];
    this.code                = json['prj:code'];
    this.timeOfCreation      = json['prj:timeOfCreation'];
    this.manualMode          = json['prj:manualMode'];
    this.simulationMode      = json['prj:simulationMode'];
    this.isCommissioning     = json['prj:isCommissioning'];
    this.isCalibration       = json['prj:isCalibration'];
    this.letterGrade         = json['prj:letterGrade'];
    this.staffProjectNote    = json['prj:staffProjectNote'];
    this.taPhase2Comments    = json['prj:taPhase2Comments'];
    this.taMainComments      = json['prj:taMainComments'];
    this.consensusReport     = json['prj:consensusReport'];
    this.p2gAttention        = json['prj:p2gAttention'];
    this.p2gAttentionReasons = json['prj:p2gAttentionReasons'];
    this.status              = json.status;
    this.revision            = json.revision;
    this.ObsProgram          = new ObsProgram().initFromJson(json['prj:ObsProgram']);
    return this;
  }

}
