import {IAngleT, IMagnitudeT} from './test';
import {ISkyCoordinatesT} from './sky-coordinates.interface';

export interface IOpticalPointingTargetQueryParametersT {
  minCoordinates: ISkyCoordinatesT;
  maxCoordinates: ISkyCoordinatesT;
  minMagnitude: IMagnitudeT;
  maxMagnitude: IMagnitudeT;
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
