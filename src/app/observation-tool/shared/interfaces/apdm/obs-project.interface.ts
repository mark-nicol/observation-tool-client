import {IEntity} from './entity.interface';
import {IEntityRef} from './entity-ref.interface';
import {IObsProgram} from './obs-program.interface';
import {ISubmissionRecord} from './submission-record.interface';

export interface IObsProject {
  obsProjectEntity: IEntity;
  obsProposalRef: IEntityRef;
  projectStatusRef: IEntityRef;
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
  obsProgram: IObsProgram;
  submissionRecord?: (ISubmissionRecord)[] | null;
  schemaVersion: string;
  revision: string;
  almatype: string;
  status: string;
}
