import {IFrequencyT} from './test';
import {IAbstractSwitchingStateT} from './abstract-switching-state.interface';

export interface IFrequencySwitchingStateT extends IAbstractSwitchingStateT {
  offset: IFrequencyT;
}
