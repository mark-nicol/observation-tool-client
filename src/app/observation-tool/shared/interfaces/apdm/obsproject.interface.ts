// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {
  IObsProjectEntityT} from '../test';
import {IObsProposalRefT, IObsReviewRef, IProjectStatusRef} from './entity-ref.interface';
import {IObsProgram} from './obs-program.interface';
import {ISubmissionRecord} from './submission-record.interface';

export interface IObsProject {
  obsProjectEntity: IObsProjectEntityT;
  obsProposalRef: IObsProposalRefT;
  obsReviewRef: IObsReviewRef;
  ProjectStatusRef: IProjectStatusRef;
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
  obsProgram: IObsProgram;
  SubmissionRecord: ISubmissionRecord[];
  schemaVersion: string;
  revision: string;
  almatype: string;
  status: string;
}
