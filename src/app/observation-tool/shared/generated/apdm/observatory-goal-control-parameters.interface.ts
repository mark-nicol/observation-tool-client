import {IAngleT, IFluxT, ITimeT} from '../test';

export interface IObservatoryGoalControlParametersT {
  elevationLimit: IAngleT;
  antennaPositionTolerance: IAngleT;
  sBMaximumTime: ITimeT;
  randomizeOrder: boolean;
  minFlux: IFluxT;
  maxFlux: IFluxT;
}
