import {ISchedBlockRefT} from './apdm/entity-ref.interface';

export interface ITargetT {
  entityPartId: string;
  AbstractInstrumentSpecRef: ISchedBlockRefT;
  FieldSourceRef: ISchedBlockRefT;
  observingParametersRef: ISchedBlockRefT[];
  almatype: string;
}
