import {AlmaInvestigatorInterface} from '../alma-investigator.interface';
import {IAlmaProjectDataModel} from './almaprojectdatamodel';
import {IScienceGoal} from './sciencegoal';

export interface IObsProposal extends IAlmaProjectDataModel {
  ScienceGoal: IScienceGoal;
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
