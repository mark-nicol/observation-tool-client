import {IEntity} from './entity.interface';
import {IEntityRef} from './entity-ref.interface';
import {IObsPlan} from './obs-plan.interface';
import {IDate} from './date.interface';
import {IInvestigator} from './investigator.interface';
import {IProposalFeedback} from './proposal-feedback.interface';
import {IScienceGoal} from './science-goal.interface';

export interface IObsProposal {
  title?: string | null;
  obsProposalEntity: IEntity;
  documentsRef: IEntityRef;
  obsProjectRef: IEntityRef;
  _abstract: string;
  relatedProposals: string;
  previousProposals: string;
  dateReceived: IDate;
  cycle: string;
  studentProject: boolean;
  continuation: boolean;
  scientificCategoryCode: string;
  proposalTypeCode: string;
  scientificCategoryString: string;
  proposalTypeString: string;
  keyword?: (string)[] | null;
  keywordCode?: (string)[] | null;
  principalInvestigator: IInvestigator;
  coInvestigator?: (IInvestigator)[] | null;
  proposalFeedback: IProposalFeedback;
  schemaVersion: string;
  revision: string;
  almatype: string;
  scienceGoals?: (IScienceGoal)[] | null;
  obsPlan: IObsPlan;
}

