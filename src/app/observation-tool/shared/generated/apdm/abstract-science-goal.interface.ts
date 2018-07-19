import {IObsProjectRefT} from './entity-ref.interface';

export interface IAbstractScienceGoalT {
  '@type': 'ObservatoryGoalT' | 'OpticalPointingScienceGoalT' | 'ScienceGoalT';
  name: string;
  note: string;
  obsUnitSetRef: IObsProjectRefT;
}
