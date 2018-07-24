// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {ISkyCoordinates} from './sky-coordinates.interface';
import {IAngleT, IFluxT, IFrequencyT, ITimeT} from './test';

export interface IQuerySource {
  queryCenter: ISkyCoordinates;
  searchRadius: IAngleT;
  minFrequency: IFrequencyT;
  maxFrequency: IFrequencyT;
  minFlux: IFluxT;
  maxFlux: IFluxT;
  minTimeSinceObserved: ITimeT;
  maxTimeSinceObserved: ITimeT;
  use: string;
  maxSources: number;
  intendedUse: string;
}
