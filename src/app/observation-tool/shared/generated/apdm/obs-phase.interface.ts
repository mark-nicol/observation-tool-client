import {IAbstractScienceGoalTUnion} from '../test';
import {IObsUnitSetT} from './obs-unit-set.interface';

export interface IObsPhase {
  '@type': 'ObsProposal' | 'ObsProgramT' | 'ObsReview';
  scienceGoals: IAbstractScienceGoalTUnion[];
  obsPlan: IObsUnitSetT;
}
