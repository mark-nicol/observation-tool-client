// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {ISchedBlockRef} from './entity-ref.interface';

export interface ITarget {
  entityPartId: string;
  AbstractInstrumentSpecRef: ISchedBlockRef;
  FieldSourceRef: ISchedBlockRef;
  observingParametersRef: ISchedBlockRef[];
  almatype: string;
}
