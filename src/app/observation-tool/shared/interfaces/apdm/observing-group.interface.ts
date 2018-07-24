// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {ISchedBlockRefT} from './apdm/entity-ref.interface';
import {IOrderedTarget} from './ordered-target.interface';

export interface IObservingGroup {
  index: number;
  name: string;
  OrderedTarget: IOrderedTarget[];
  mainTargetRef: ISchedBlockRefT;
}
