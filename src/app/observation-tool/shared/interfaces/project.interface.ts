import {PrincipleInvestigatorInterface} from './principle-investigator.interface';
import {ProposalInterface} from './proposal.interface';

export interface ProjectInterface {
  principleInvestigator: PrincipleInvestigatorInterface,
  priority: number,
  projectCode: string,
  proposal: ProposalInterface
}
