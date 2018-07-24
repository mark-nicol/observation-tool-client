// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IAngleT, ITimeT} from './test';
import {IAbstractSwitchingState} from './abstract-switching-state.interface';

export interface IBeamSwitchingState extends IAbstractSwitchingState {
  position: IAngleT;
  transition: ITimeT;
}
