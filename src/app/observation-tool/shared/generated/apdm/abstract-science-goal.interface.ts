// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IObsProjectRef} from './entity-ref.interface';

export interface IAbstractScienceGoal {
  '@type': 'ObservatoryGoalT' | 'OpticalPointingScienceGoalT' | 'ScienceGoalT';
  name: string;
  note: string;
  obsUnitSetRef: IObsProjectRef;
}
