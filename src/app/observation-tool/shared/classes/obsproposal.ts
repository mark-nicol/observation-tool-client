import {IObsProposal} from '../interfaces/project/obsproposal.interface';
import {IScienceGoal} from '../interfaces/project/science-goal/sciencegoal.interface';
import {IAlmaInvestigator} from '../interfaces/alma-investigator.interface';
import {IProposalFeedback} from '../interfaces/project/propsal-feedback.interface';

export class ObsProposal implements IObsProposal {
  prj_ScienceGoal: IScienceGoal;
  prp_PrincipalInvestigator: IAlmaInvestigator;
  prp_abstract: string;
  prp_coInvestigators: IAlmaInvestigator[];
  prp_coPrincipalInvestigators: IAlmaInvestigator[];
  prp_continuation: boolean;
  prp_cycle: string;
  prp_dateReceived: Date;
  prp_duplicateObservationJustification: string;
  prp_isResubmission: boolean;
  prp_keyword: string[];
  prp_keywordCode: string[];
  prp_proposalFeedback: IProposalFeedback;
  prp_proposalTypeCode: string;
  prp_proposalTypeString: string;
  prp_recentPublications: string;
  prp_relatedProposals: string;
  prp_resubmittedProjectCode: string;
  prp_scientificCategoryCode: string;
  prp_scientificCategoryString: string;
  prp_studentProject: boolean;
  prp_title: string;
}
