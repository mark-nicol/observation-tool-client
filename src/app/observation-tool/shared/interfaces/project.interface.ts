import {AlmaInvestigatorInterface} from './alma-investigator.interface';
import {ProposalInterface} from './proposal.interface';
import {ScienceGoalInterface} from './science-goal.interface';

export interface ProjectInterface {
  project: {
    principleInvestigator: AlmaInvestigatorInterface,
    priority: number,
    projectCode: string
  },
  proposal: ProposalInterface
  scienceGoals: { [id: number]: ScienceGoalInterface }
}
