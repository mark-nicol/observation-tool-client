import {AlmaInvestigatorInterface} from '../alma-investigator.interface';
import {ScienceGoal} from './sciencegoal';

export interface ObsProposal {
  ScienceGoal: ScienceGoal;
  abstract: string;
  relatedProposals: string;
  previousProposals: string;
  cycle: string;
  studentProject: boolean;
  scientificCategoryCode: number;
  proposalTypeCode: string;
  scientificCategoryString: string;
  proposalTypeString: string;
  keyword: string;
  keywordCode: string;
  duplicateObservationsJustification: string;
  PrincipleInvestigator: AlmaInvestigatorInterface;
}
