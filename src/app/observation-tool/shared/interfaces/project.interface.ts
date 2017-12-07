import {AlmaInvestigatorInterface} from './alma-investigator.interface';
import {ProposalInterface} from './proposal.interface';

export interface ProjectInterface {
  principleInvestigator: AlmaInvestigatorInterface,
  priority: number,
  projectCode: string,
  proposal: ProposalInterface
}
