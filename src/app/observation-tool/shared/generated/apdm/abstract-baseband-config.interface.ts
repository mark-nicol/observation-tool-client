import {ISchedBlockRefT} from './apdm/entity-ref.interface';

export interface IAbstractBaseBandConfigT {
  BaseBandSpecificationRef: ISchedBlockRefT;
  dataProducts: string;
}
