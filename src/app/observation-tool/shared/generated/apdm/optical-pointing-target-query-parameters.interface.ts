// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IAngleT} from './test';
import {ISkyCoordinates} from './sky-coordinates.interface';
import {IMagnitude} from './magnitude.interface';

export interface IOpticalPointingTargetQueryParameters {
  minCoordinates: ISkyCoordinates;
  maxCoordinates: ISkyCoordinates;
  minMagnitude: IMagnitude;
  maxMagnitude: IMagnitude;
  minElevation: IAngleT;
  maxElevation: IAngleT;
  minAzimuth: IAngleT;
  maxAzimuth: IAngleT;
  lst: string;
  fieldMinSeparation: IAngleT;
  listMinSeparation: IAngleT;
  selectionFactor: number;
  maxTargets: number;
  catalogLocation: string;
  localFileName: string;
}
