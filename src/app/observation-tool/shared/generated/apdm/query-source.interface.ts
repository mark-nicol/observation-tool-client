import {ISkyCoordinatesT} from './sky-coordinates.interface';
import {IAngleT, IFluxT, IFrequencyT, ITimeT} from './test';

export interface IQuerySourceT {
  queryCenter: ISkyCoordinatesT;
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
