// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {ISkyCoordinates} from './sky-coordinates.interface';
import {IMagnitude} from './magnitude.interface';
import {Angle} from '../../../../units/classes/angle';

export interface IOpticalPointingTargetQueryParameters {
  minCoordinates: ISkyCoordinates;
  maxCoordinates: ISkyCoordinates;
  minMagnitude: IMagnitude;
  maxMagnitude: IMagnitude;
  minElevation: Angle;
  maxElevation: Angle;
  minAzimuth: Angle;
  maxAzimuth: Angle;
  lst: string;
  fieldMinSeparation: Angle;
  listMinSeparation: Angle;
  selectionFactor: number;
  maxTargets: number;
  catalogLocation: string;
  localFileName: string;
}
