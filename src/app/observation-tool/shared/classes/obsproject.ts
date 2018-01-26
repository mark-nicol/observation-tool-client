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
              p2gAttentionReasons?: string,
              revision?: number) {
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
    this.revision            = revision;
  }

  initFromJson(json: any) {
    console.log('ObsProject', 'initFromJson');
    Object.keys(this).forEach(key => {
      if (json['prj:' + key] !== undefined) {
        this[key] = json['prj:' + key];
      } else if (json[key] !== undefined) {
        this[key] = json[key];
      }
    });
    this.ObsProgram = new ObsProgram().initFromJson(json['prj:ObsProgram']);
    console.log(this);
    return this;
  }

}
