// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IAbstractSwitchingState} from './abstract-switching-state.interface';
import {Angle} from '../../../../units/classes/angle';
import {Time} from '../../../../units/classes/time';

export interface IBeamSwitchingState extends IAbstractSwitchingState {
  position: Angle;
  transition: Time;
}
