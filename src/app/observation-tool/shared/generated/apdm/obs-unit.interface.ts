import {IUnitDependenciesT} from './unit-dependencies.interface';
import {IObsProjectRefT} from './entity-ref.interface';
import {IObsUnitControlT} from './obs-unit-control.interface';

export interface IObsUnitT {
  '@type': 'ObsUnitSetT' | 'SchedBlock';
  name: string;
  note: string;
  obsUnitControl: IObsUnitControlT;
  UnitDependencies: IUnitDependenciesT;
  obsProjectRef: IObsProjectRefT;
  status: string;
}
