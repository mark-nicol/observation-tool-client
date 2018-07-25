// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IAbstractSwitchingCycle} from './abstract-switching-cycle.interface';
import {IBeamSwitchingState} from './beam-switching-state.interface';

export interface IBeamSwitchingCycle extends IAbstractSwitchingCycle {
  BeamSwitchingState: IBeamSwitchingState[];
  mode: string;
}
