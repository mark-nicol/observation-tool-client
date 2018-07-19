import {
  IObsProjectEntityT} from '../test';
import {IObsProposalRefT, IObsReviewRefT, IProjectStatusRefT} from './entity-ref.interface';
import {IObsProgramT} from './obs-program.interface';
import {ISubmissionRecordT} from './submission-record.interface';

export interface IObsProject {
  obsProjectEntity: IObsProjectEntityT;
  obsProposalRef: IObsProposalRefT;
  obsReviewRef: IObsReviewRefT;
  ProjectStatusRef: IProjectStatusRefT;
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
  scientificRank: number;
  scientificScore: number;
  staffProjectNote: string;
  taPhase2Comments: string;
  taMainComments: string;
  consensusReport: string;
  isDDT: boolean;
  p2gAttention: boolean;
  p2gAttentionReasons: string;
  obsProgram: IObsProgramT;
  SubmissionRecord: ISubmissionRecordT[];
  schemaVersion: string;
  revision: string;
  almatype: string;
  status: string;
}
