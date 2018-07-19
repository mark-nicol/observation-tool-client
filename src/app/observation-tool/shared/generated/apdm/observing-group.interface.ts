import {ISchedBlockRefT} from './apdm/entity-ref.interface';
import {IOrderedTargetT} from './ordered-target.interface';

export interface IObservingGroupT {
  index: number;
  name: string;
  OrderedTarget: IOrderedTargetT[];
  mainTargetRef: ISchedBlockRefT;
}
