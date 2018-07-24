// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {
  IProposalFeedback
} from './proposal-feedback.interface';
import {IObsAttachmentRef, IObsProjectRef} from './entity-ref.interface';
import {IObsPhase} from './obs-phase.interface';
import {IObsProposalEntity} from './entity.interface';
import {IInvestigator} from './investigator.interface';

export interface IObsProposal extends IObsPhase {
  '@type': 'ObsProposal';
  obsProposalEntity: IObsProposalEntity;
  DocumentsRef: IObsAttachmentRef;
  obsProjectRef: IObsProjectRef;
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
  PrincipalInvestigator: IInvestigator;
  CoInvestigator: IInvestigator[];
  CoPrincipalInvestigator: IInvestigator[];
  ProposalFeedback: IProposalFeedback;
  schemaVersion: string;
  revision: string;
  almatype: string;
}
