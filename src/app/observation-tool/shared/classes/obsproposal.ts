import {IAlmaInvestigator} from '../interfaces/alma-investigator.interface';
import {IObsProposal} from '../interfaces/project/obsproposal.interface';
import {IProposalFeedback} from '../interfaces/project/propsal-feedback.interface';
import {IScienceGoal} from '../interfaces/project/science-goal/sciencegoal.interface';
import {ScienceGoal} from './science-goal/science-goal';

export class ObsProposal implements IObsProposal {

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
  // scienceGoals: IScienceGoal[];
  scienceGoals: IScienceGoal;
  proposalFeedback: IProposalFeedback;


  constructor(title?: string,
              code?: string,
              abstract?: string,
              relatedProposals?: string,
              dateReceived?: Date,
              cycle?: string,
              studentProject?: boolean,
              continuation?: boolean,
              recentPublications?: string,
              scientificCategoryCode?: string,
              proposalTypeCode?: string,
              scientificCategoryString?: string,
              proposalTypeString?: string,
              keywords?: string[],
              keywordCode?: string[],
              resubmittedProjectCode?: string,
              isResubmission?: boolean,
              duplicateObservationJustification?: string,
              principalInvestigator?: IAlmaInvestigator,
              coPrincipalInvestigators?: IAlmaInvestigator[],
              coInvestigators?: IAlmaInvestigator[],
              scienceGoals?: IScienceGoal,
              proposalFeedback?: IProposalFeedback) {
    this.title                             = title;
    this.code                              = code;
    this.abstract                          = abstract;
    this.relatedProposals                  = relatedProposals;
    this.dateReceived                      = dateReceived;
    this.cycle                             = cycle;
    this.studentProject                    = studentProject;
    this.continuation                      = continuation;
    this.recentPublications                = recentPublications;
    this.scientificCategoryCode            = scientificCategoryCode;
    this.proposalTypeCode                  = proposalTypeCode;
    this.scientificCategoryString          = scientificCategoryString;
    this.proposalTypeString                = proposalTypeString;
    this.keywords                          = keywords;
    this.keywordCode                       = keywordCode;
    this.resubmittedProjectCode            = resubmittedProjectCode;
    this.isResubmission                    = isResubmission;
    this.duplicateObservationJustification = duplicateObservationJustification;
    this.principalInvestigator             = principalInvestigator;
    this.coPrincipalInvestigators          = coPrincipalInvestigators;
    this.coInvestigators                   = coInvestigators;
    this.scienceGoals                      = scienceGoals;
    this.proposalFeedback                  = proposalFeedback;
  }

}
