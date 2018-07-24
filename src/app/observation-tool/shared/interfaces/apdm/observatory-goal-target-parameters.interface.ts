// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {Flux} from '../../../../units/classes/flux';
import {Frequency} from '../../../../units/classes/frequency';
import {ISkyCoordinates} from './sky-coordinates.interface';
import {IVelocity} from './velocity.interface';
import {ICalibrationTargetProperties} from './calibration-target-properties.interface';

export interface IObservatoryGoalTargetParameters {
  sourceName: string;
  sourceCoordinates: ISkyCoordinates;
  flux: Flux;
  sourceVelocity: IVelocity;
  index: number;
  frequency: Frequency;
  CalibrationTargetProperties: ICalibrationTargetProperties[];
}
