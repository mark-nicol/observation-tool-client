// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {ISkyCoordinates} from './sky-coordinates.interface';
import {Frequency} from '../../../../units/classes/frequency';
import {Angle} from '../../../../units/classes/angle';
import {Flux} from '../../../../units/classes/flux';
import {Time} from '../../../../units/classes/time';

export interface IQuerySource {
  queryCenter: ISkyCoordinates;
  searchRadius: Angle;
  minFrequency: Frequency;
  maxFrequency: Frequency;
  minFlux: Flux;
  maxFlux: Flux;
  minTimeSinceObserved: Time;
  maxTimeSinceObserved: Time;
  use: string;
  maxSources: number;
  intendedUse: string;
}
