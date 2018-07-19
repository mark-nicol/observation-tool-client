import {IVelocityT} from './velocity.interface';
import {ICalibrationTargetPropertiesT} from './calibration-target-properties.interface';
import {ISkyCoordinatesT} from './sky-coordinates.interface';

export interface ICalibrationTargetParametersT {
  sourceName: string;
  sourceCoordinates: ISkyCoordinatesT;
  sourceVelocity: IVelocityT;
  index: number;
  nonSiderealMotion: boolean;
  CalibrationTargetProperties: ICalibrationTargetPropertiesT[];
  intendedUse: string;
  solarSystemObject: string;
}
