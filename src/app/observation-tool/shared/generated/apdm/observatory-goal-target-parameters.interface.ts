import {IFluxT, IFrequencyT} from '../test';
import {IVelocityT} from '../velocity.interface';
import {ISkyCoordinatesT} from '../sky-coordinates.interface';
import {ICalibrationTargetPropertiesT} from '../calibration-target-properties.interface';

export interface IObservatoryGoalTargetParametersT {
  sourceName: string;
  sourceCoordinates: ISkyCoordinatesT;
  flux: IFluxT;
  sourceVelocity: IVelocityT;
  index: number;
  frequency: IFrequencyT;
  CalibrationTargetProperties: ICalibrationTargetPropertiesT[];
}
