// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IObsUnitSet} from './obs-unit-set.interface';
import {IObsProgram} from './obs-program.interface';
import {IObsReview} from './obs-review.interface';
import {IObsProposal} from './obsproposal.interface';
import {IAbstractScienceGoalUnion} from './abstract-science-goal.interface';

export interface IObsPhase {
  '@type': 'ObsProposal' | 'ObsProgramT' | 'ObsReview';
  scienceGoals: IAbstractScienceGoalUnion[];
  obsPlan: IObsUnitSet;
}

export type IObsPhaseUnion = IObsProgram | IObsReview | IObsProposal;
