// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IAbstractScienceGoalTUnion} from '../test';
import {IObsUnitSet} from './obs-unit-set.interface';

export interface IObsPhase {
  '@type': 'ObsProposal' | 'ObsProgramT' | 'ObsReview';
  scienceGoals: IAbstractScienceGoalTUnion[];
  obsPlan: IObsUnitSet;
}
