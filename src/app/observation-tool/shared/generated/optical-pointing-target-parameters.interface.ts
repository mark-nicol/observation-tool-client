import {IAngleT, IAngularVelocityT} from './test';
import {ISkyCoordinatesT} from './sky-coordinates.interface';

export interface IOpticalPointingTargetParametersT {
  sourceName: string;
  sourceCoordinates: ISkyCoordinatesT;
  pmRA: IAngularVelocityT;
  pmDec: IAngularVelocityT;
  parallax: IAngleT;
  visibleMagnitude: number;
}
