// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IAngleT, IAngularVelocityT} from './test';
import {ISkyCoordinates} from './sky-coordinates.interface';

export interface IOpticalPointingTargetParameters {
  sourceName: string;
  sourceCoordinates: ISkyCoordinates;
  pmRA: IAngularVelocityT;
  pmDec: IAngularVelocityT;
  parallax: IAngleT;
  visibleMagnitude: number;
}
