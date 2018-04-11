import {IAlmaInvestigator} from '../alma-investigator.interface';
import {IProposalFeedback} from './propsal-feedback.interface';
import {IScienceGoal} from './science-goal/sciencegoal.interface';

export interface IObsProposal {
  prp_title: string;
  prp_abstract: string;
  prp_relatedProposals: string;
  prp_dateReceived: Date;
  prp_cycle: string;
  prp_studentProject: boolean;
  prp_continuation: boolean;
  prp_recentPublications: string;
  prp_scientificCategoryCode: string;
  prp_proposalTypeCode: string;
  prp_scientificCategoryString: string;
  prp_proposalTypeString: string;
  prp_keyword: string[];
  prp_keywordCode: string[];
  prp_resubmittedProjectCode: string;
  prp_isResubmission: boolean;
  prp_duplicateObservationJustification: string;
  prp_PrincipalInvestigator: IAlmaInvestigator;
  prp_coPrincipalInvestigators: IAlmaInvestigator[];
  prp_coInvestigators: IAlmaInvestigator[];
  prj_ScienceGoal: IScienceGoal;
  prp_proposalFeedback: IProposalFeedback;
}
