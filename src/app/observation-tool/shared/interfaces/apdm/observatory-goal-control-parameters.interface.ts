// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {Angle} from '../../../../units/classes/angle';
import {Time} from '../../../../units/classes/time';
import {Flux} from '../../../../units/classes/flux';

export interface IObservatoryGoalControlParameters {
  elevationLimit: Angle;
  antennaPositionTolerance: Angle;
  sBMaximumTime: Time;
  randomizeOrder: boolean;
  minFlux: Flux;
  maxFlux: Flux;
}
