// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IFluxT, IFrequencyT} from '../test';
import {IVelocityT} from '../velocity.interface';
import {ISkyCoordinatesT} from '../sky-coordinates.interface';
import {ICalibrationTargetPropertiesT} from '../calibration-target-properties.interface';

export interface IObservatoryGoalTargetParameters {
  sourceName: string;
  sourceCoordinates: ISkyCoordinatesT;
  flux: IFluxT;
  sourceVelocity: IVelocityT;
  index: number;
  frequency: IFrequencyT;
  CalibrationTargetProperties: ICalibrationTargetPropertiesT[];
}
