// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IUnitDependencies} from './unit-dependencies.interface';
import {IObsProjectRef} from './entity-ref.interface';
import {IObsUnitControl} from './obs-unit-control.interface';

export interface IObsUnit {
  '@type': 'ObsUnitSetT' | 'SchedBlock';
  name: string;
  note: string;
  obsUnitControl: IObsUnitControl;
  UnitDependencies: IUnitDependencies;
  obsProjectRef: IObsProjectRef;
  status: string;
}
