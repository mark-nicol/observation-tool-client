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
  scienceGoals: IScienceGoal[];
  proposalFeedback: IProposalFeedback;

  initFromJson(json: any) {
    this.title                             = json['prp:title'];
    this.code                              = json['prp:code'];
    this.abstract                          = json['prp:abstract'];
    this.relatedProposals                  = json['prp:relatedProposals'];
    this.dateReceived                      = json['prp:dateReceived'];
    this.cycle                             = json['prp:cycle'];
    this.studentProject                    = json['prp:studentProject'];
    this.continuation                      = json['prp:continuation'];
    this.recentPublications                = json['prp:recentPublications'];
    this.scientificCategoryCode            = json['prp:scientificCategoryCode'];
    this.proposalTypeCode                  = json['prp:proposalTypeCode'];
    this.scientificCategoryString          = json['prp:scientificCategoryString'];
    this.proposalTypeString                = json['prp:proposalTypeString'];
    this.resubmittedProjectCode            = json['prp:resubmittedProjectCode'];
    this.isResubmission                    = json['prp:isResubmission'];
    this.duplicateObservationJustification = json['prp:duplicateObservationJustification'];
    this.scienceGoals                      = [new ScienceGoal().initFromJson(json['prj:ScienceGoal'])];
    return this;
  }

}
