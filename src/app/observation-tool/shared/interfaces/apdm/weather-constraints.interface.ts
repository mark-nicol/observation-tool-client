// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {Angle} from '../../../../units/classes/angle';
import {Speed} from '../../../../units/classes/speed';
import {Length} from '../../../../units/classes/length';

export interface IWeatherConstraints {
  maxPWVC: Length;
  seeing: Angle;
  phaseStability: Angle;
  maxWindVelocity: Speed;
}
