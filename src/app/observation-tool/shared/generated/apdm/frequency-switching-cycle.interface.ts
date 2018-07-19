import {IFrequencySwitchingStateT} from './frequency-switching-state.interface';
import {IAbstractSwitchingCycleT} from './abstract-switching-cycle.interface';

export interface IFrequencySwitchingCycleT extends IAbstractSwitchingCycleT {
  FrequencySwitchingState: IFrequencySwitchingStateT[];
}
