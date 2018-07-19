import {IAbstractSwitchingCycleT} from './abstract-switching-cycle.interface';
import {IBeamSwitchingStateT} from './beam-switching-state.interface';

export interface IBeamSwitchingCycleT extends IAbstractSwitchingCycleT {
  BeamSwitchingState: IBeamSwitchingStateT[];
  mode: string;
}
