import {PrincipleInvestigatorInterface} from './principle-investigator.interface';
import {ScienceGoalPageInterface} from './science-goal-page.interface';

export enum ProposalTypeEnum {
  REGULAR = 'regular',
  OPPORTUNITY = 'opportunity',
  VLBI = 'vlbi',
  LARGE = 'large'
}

export interface ProposalInterface {
  title: string,
  cycle: string,
  abstract: string,
  proposalType: ProposalTypeEnum,
  scientificCategory: string,
  keywords: [string],
  studentProject: boolean,
  relatedProposals: string,
  previousProposals: string,
  investigators: [PrincipleInvestigatorInterface],
  scienceCase: any,
  duplicateObservations: string,
  scienceGoals: [ScienceGoalPageInterface]
}
