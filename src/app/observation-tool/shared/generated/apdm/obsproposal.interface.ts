import {
  IProposalFeedbackT
} from './proposal-feedback.interface';
import {IObsAttachmentRefT, IObsProjectRefT} from './entity-ref.interface';
import {IObsPhase} from './obs-phase.interface';
import {IObsProposalEntityT} from './entity.interface';
import {IInvestigatorT} from './investigator.interface';

export interface IObsProposal extends IObsPhase {
  '@type': 'ObsProposal';
  obsProposalEntity: IObsProposalEntityT;
  DocumentsRef: IObsAttachmentRefT;
  obsProjectRef: IObsProjectRefT;
  title: string;
  code: string;
  abstract: string;
  relatedProposals: string;
  previousProposals: string;
  dateReceived: string;
  cycle: string;
  studentProject: boolean;
  continuation: boolean;
  recentPublications: string;
  scientificCategoryCode: string;
  proposalTypeCode: string;
  scientificCategoryString: string;
  proposalTypeString: string;
  keyword: string[];
  keywordCode: string[];
  resubmittedProjectCode: string;
  isResubmission: boolean;
  duplicateObservationsJustification: string;
  PrincipalInvestigator: IInvestigatorT;
  CoInvestigator: IInvestigatorT[];
  CoPrincipalInvestigator: IInvestigatorT[];
  ProposalFeedback: IProposalFeedbackT;
  schemaVersion: string;
  revision: string;
  almatype: string;
}
