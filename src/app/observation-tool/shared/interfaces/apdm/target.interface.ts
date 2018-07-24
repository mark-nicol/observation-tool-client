// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {ISchedBlockRefT} from './apdm/entity-ref.interface';

export interface ITarget {
  entityPartId: string;
  AbstractInstrumentSpecRef: ISchedBlockRefT;
  FieldSourceRef: ISchedBlockRefT;
  observingParametersRef: ISchedBlockRefT[];
  almatype: string;
}
