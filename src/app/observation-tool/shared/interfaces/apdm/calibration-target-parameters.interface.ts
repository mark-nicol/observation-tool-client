// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IVelocity} from './velocity.interface';
import {ICalibrationTargetProperties} from './calibration-target-properties.interface';
import {ISkyCoordinates} from './sky-coordinates.interface';

export interface ICalibrationTargetParameters {
  sourceName: string;
  sourceCoordinates: ISkyCoordinates;
  sourceVelocity: IVelocity;
  index: number;
  nonSiderealMotion: boolean;
  CalibrationTargetProperties: ICalibrationTargetProperties[];
  intendedUse: string;
  solarSystemObject: string;
}
