import {IAngleT, ITimeT} from './test';
import {IAbstractSwitchingStateT} from './abstract-switching-state.interface';

export interface IBeamSwitchingStateT extends IAbstractSwitchingStateT {
  position: IAngleT;
  transition: ITimeT;
}
