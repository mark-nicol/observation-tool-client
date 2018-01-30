import {IAlmaInvestigator} from '../alma-investigator.interface';
import {IProposalFeedback} from './propsal-feedback.interface';
import {IScienceGoal} from './science-goal/sciencegoal.interface';

export interface IObsProposal {
  title: string;
  code: string;
  abstract: string;
  relatedProposals: string;
  dateReceived: Date;
  cycle: string;
  studentProject: boolean;
  continuation: boolean;
  recentPublications: string;
  scientificCategoryCode: string;
  proposalTypeCode: string;
  scientificCategoryString: string;
  proposalTypeString: string;
  keywords: string[];
  keywordCode: string[];
  resubmittedProjectCode: string;
  isResubmission: boolean;
  duplicateObservationJustification: string;
  principalInvestigator: IAlmaInvestigator;
  coPrincipalInvestigators: IAlmaInvestigator[];
  coInvestigators: IAlmaInvestigator[];
  scienceGoals: IScienceGoal;
  proposalFeedback: IProposalFeedback;
}
