import {IObsProposal} from '../interfaces/project/obsproposal.interface';
import {IScienceGoal} from '../interfaces/project/science-goal/sciencegoal.interface';
import {IAlmaInvestigator} from '../interfaces/alma-investigator.interface';
import {IProposalFeedback} from '../interfaces/project/propsal-feedback.interface';
import {ScienceGoal} from './science-goal/science-goal';

export class ObsProposal implements IObsProposal {
  ScienceGoal: IScienceGoal[];
  PrincipalInvestigator: IAlmaInvestigator;
  abstract: string;
  coInvestigators: IAlmaInvestigator[];
  coPrincipalInvestigators: IAlmaInvestigator[];
  continuation: boolean;
  cycle: string;
  dateReceived: Date;
  duplicateObservationJustification: string;
  isResubmission: boolean;
  keyword: string[];
  keywordCode: string[];
  proposalFeedback: IProposalFeedback;
  proposalTypeCode: string;
  proposalTypeString: string;
  recentPublications: string;
  relatedProposals: string;
  resubmittedProjectCode: string;
  scientificCategoryCode: string;
  scientificCategoryString: string;
  studentProject: boolean;
  title: string;
}
